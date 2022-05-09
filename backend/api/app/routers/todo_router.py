from fastapi import HTTPException
from typing import List
from fastapi import Depends, FastAPI, Response, Request
from app.controller.todo import TodoController
from app.schemas.schemas import SuccessMsg, Todo, TodoBase
import app.models.database as database
from sqlalchemy.orm import Session
from fastapi import APIRouter

from app.utils.auth import AuthCsrfJwt
from ..controller.user import UserController

router = APIRouter()
auth = AuthCsrfJwt()


@router.get("/api/todo/{user_id}", response_model=List[Todo])
def get_todo(request: Request, response: Response, user_id: str, db: Session = Depends(database.get_db)):
    new_token, _ = auth.verify_update_jwt(request)
    response.set_cookie(key="access_token", value=f"Bearer {new_token}", httponly=True, samesite="none", secure=True)
    todo_controller = TodoController(user_id, db)
    return todo_controller.read_todos()


@router.post("/api/todo/{user_id}",response_model=int)
def post_todo(
    request: Request, response: Response, user_id: str, todo: TodoBase, db: Session = Depends(database.get_db)
):
    new_token, _ = auth.verify_update_jwt(request)
    response.set_cookie(key="access_token", value=f"Bearer {new_token}", httponly=True, samesite="none", secure=True)
    todo_controller = TodoController(user_id, db)
    todo_id = todo_controller.create_todo(todo)
    return todo_id
