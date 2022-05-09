from typing import List
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
        return result
