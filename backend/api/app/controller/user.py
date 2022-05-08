from typing import List
from fastapi import HTTPException
from sqlalchemy.orm import Session
from app.models.database import SessionLocal
import app.schemas.schemas as schemas
import app.models.models as models
from app.utils.auth import AuthCsrfJwt


auth = AuthCsrfJwt()


class UserController:
    def __init__(self, user_id: int = None, db: Session = SessionLocal()):
        self.db = db
        self.user_id = user_id

    def create_user(self, user: schemas.UserBase) -> models.User:
        email = user.email
        password = user.password

        #  emailの重複がないか確認
        if self.get_user_by_email(email):
            raise HTTPException(status_code=400, detail="Email is already taken")
        if not password or len(password) < 6:
            raise HTTPException(status_code=400, detail="Password too short")

        user.password = auth.generate_hashed_pw(password)
        db_item: models.User = models.User(**user.dict())
        self.db.add(db_item)
        self.db.commit()
        self.db.refresh(db_item)
        return db_item

    def login(self, user: schemas.UserBase) -> str:
        email = user.email
        password = user.password

        db_user: schemas.User = self.get_user_by_email(email)
        if not db_user or not auth.verify_pw(password, db_user.password):
            raise HTTPException(status_code=401, detail="invalid email or password")
        token = auth.encode_jwt(user["email"])
        return token

    def get_user(self) -> schemas.User:
        result: models.User = self.db.query(models.User).filter(models.User.id == id).first()
        return result

    def get_user_by_email(self, email: str) -> schemas.User:
        result: models.User = self.db.query(models.User).filter(models.User.email == email).first()
        return result

    def get_all_user(self):
        result = self.db.query(models.User).all()
        print(result)
        return result
