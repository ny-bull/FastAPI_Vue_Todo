from typing import List
from fastapi import HTTPException
from sqlalchemy.orm import Session
from app.models.database import SessionLocal
import app.schemas.schemas as schemas
import app.models.models as models


class TodoController:
    def __init__(self, user_id: int, db: Session = SessionLocal()):
        self.db = db
        self.user_id = user_id

    def read_todos(self) -> List[schemas.Todo]:
        result = self.db.query(models.Todo).filter(models.Todo.owner_id == self.user_id)
        return list(result)

    def create_todo(self, todo: schemas.TodoBase) -> int:
        db_item: models.Todo = models.Todo(**todo.dict(), owner_id=self.user_id)
        self.db.add(db_item)
        self.db.commit()
        self.db.refresh(db_item)
        return db_item.id

    def read_single_todo(self, id: int) -> schemas.Todo:
        result: models.Todo = self.db.query(models.Todo).filter(models.Todo.id == id).first()
        return schemas.Todo.from_orm(result)

    def update_todo(self, todo: schemas.TodoBase, id: int) -> schemas.Todo:
        db_todo: models.Todo = self.db.query(models.Todo).filter(models.Todo.id == id).first()
        if db_todo:
            db_todo.title = todo.title
            db_todo.description = todo.description
            self.db.commit()
            self.db.refresh(db_todo)
            return schemas.Todo.from_orm(db_todo)
        else:
            raise HTTPException(status_code=401, detail="invalid todo_id")

    def delete_todo(self, id: int) -> int:
        self.db.query(models.Todo).filter(models.Todo.id == id).delete()
        self.db.commit()
        return id
