from typing import Optional
from pydantic import BaseModel


class TodoBase(BaseModel):
    title: str
    description: Optional[str] = None


class Todo(TodoBase):
    id: int
    owner_id: int

    # DBから取得したデータのモデルがORMであっても読み取れるようにするため
    class Config:
        orm_mode = True


class UserBase(BaseModel):
    email: str
    password: str


class User(UserBase):
    id: int
    items: list[Todo] = []

    class Config:
        orm_mode = True
