from csv import excel_tab
from datetime import datetime, timedelta
from fastapi import HTTPException
from passlib.context import CryptContext
from jose import JWTError, jwt

SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

class AuthCsrfJwt:
    pwd_ctx = CryptContext(schemes=["bcrypt"], deprecated="auto")

    def generate_hashed_pw(self, password: str) -> str:
        return self.pwd_ctx.hash(password)

    def verify_pw(self, plain_pw, hashed_pw) -> bool:
        return self.pwd_ctx.verify(plain_pw, hashed_pw)
    
    def 
