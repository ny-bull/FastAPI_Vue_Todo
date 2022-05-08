from csv import excel_tab
from datetime import datetime, timedelta
from fastapi import HTTPException, Request, Response
from passlib.context import CryptContext
from jose import JWTError, jwt
from decouple import config

SECRET_KEY = config("SECRET_KEY")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


class AuthCsrfJwt:
    pwd_ctx = CryptContext(schemes=["bcrypt"], deprecated="auto")

    def generate_hashed_pw(self, password: str) -> str:
        return self.pwd_ctx.hash(password)

    def verify_pw(self, plain_pw, hashed_pw) -> bool:
        return self.pwd_ctx.verify(plain_pw, hashed_pw)

    def encode_jwt(self, email) -> str:
        payload = {"exp": datetime.utcnow() + timedelta(days=0, minutes=5), "iat": datetime.utcnow(), "sub": email}
        return jwt.encode(payload, SECRET_KEY, ALGORITHM)

    def decode_jwt(self, token: str) -> str:
        try:
            payload = jwt.decode(token)
            return payload["sub"]
        except jwt.ExpiredSignatureError:
            raise HTTPException(status_code=401, detail="The JWT has expired")
        except jwt.InvalidTokenError:
            raise HTTPException(status_code=401, detail="JWT is not valid")

    def verify_jwt(self, request: Response) -> str:
        token = request.cookies.get("access_token")
        if not token:
            raise HTTPException(status_code=401, detail="JWT does not exist: may not set yet or deleted")
        _, _, value = token.partition(" ")
        subject = self.decode_jwt(value)
        return subject

    def verify_update_jwt(self, request: Request) -> tuple[str, str]:
        subject = self.verify_jwt(request)
        new_token = self.encode_jwt(subject)
        return new_token, subject
