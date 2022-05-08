from fastapi import HTTPException
from typing import List
from fastapi import Depends, FastAPI, Response, Request
from app.schemas.schemas import SuccessMsg, User, UserCreate, UserInfo
import app.models.database as database
from sqlalchemy.orm import Session
from fastapi import APIRouter

from app.utils.auth import AuthCsrfJwt
from ..controller.user import UserController

router = APIRouter()
auth = AuthCsrfJwt()


@router.get("/api/users", response_model=List[User])
def get_all_user(db: Session = Depends(database.get_db)):
    controller = UserController(None, db)
    return controller.get_all_user()


@router.post("/api/signup", response_model=User)
def post_user(user: UserCreate, db: Session = Depends(database.get_db)):
    controller = UserController(None, db)
    new_user = controller.create_user(user)
    return new_user


@router.post("/api/signin", response_model=SuccessMsg)
def sign_in(response: Response, user: UserCreate, db: Session = Depends(database.get_db)):
    controller = UserController(None, db)
    token = controller.sign_in(user)
    response.set_cookie(key="access_token", value=f"Bearer {token}", httponly=True, samesite="none", secure=True)
    return {"message": "Successfully logged-in"}


@router.post("/api/signout", response_model=SuccessMsg)
def sign_out(response: Response):
    response.set_cookie(key="access_token", value="", httponly=True, samesite="none", secure=True)
    return {"message": "Successfully logged-out"}


@router.get("/api/user/{user_id}", response_model=UserInfo)
def get_user(request: Request, response: Response, user_id: str):
    new_token, subject = auth.verify_update_jwt(request)
    response.set_cookie(key="access_token", value=f"Bearer {new_token}", httponly=True, samesite="none", secure=True)
    return {"email": subject}
