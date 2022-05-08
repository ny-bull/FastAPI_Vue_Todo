from fastapi import HTTPException
from typing import List
from fastapi import Depends, FastAPI
from app.schemas.schemas import User, UserBase
import app.models.models as models
import app.models.database as database
from app.utils.todo_util import TodoUtil
from sqlalchemy.orm import Session
from fastapi import APIRouter
from ..controller.user import UserController

router = APIRouter()


@router.get("/api/users", response_model=List[User])
def get_all_user(db: Session = Depends(database.get_db)):
    controller = UserController(None, db)
    return controller.get_all_user()


@router.post("/api/register", response_model=User)
def post_user(user: UserBase, db: Session = Depends(database.get_db)):
    controller = UserController(None, db)
    new_user = controller.create_user(user)
    return new_user


@router.post("/api/login")
def login(user: UserBase, db: Session = Depends(database.get_db())):
    controller = UserController(None,db)
