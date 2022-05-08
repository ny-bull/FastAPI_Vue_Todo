from fastapi import HTTPException
from typing import List
from fastapi import Depends, FastAPI
import app.models.models as models
import app.models.database as database
from .routers import user_router

models.Base.metadata.create_all(bind=database.engine)


app = FastAPI()
app.include_router(user_router.router)


@app.get("/")
def read_root():
    return {"Hello": "World"}


# @app.get("/todos/{user_id}", response_model=List[models.Todo])
# def get_todos_by_user_id(user_id: int, db: Session = Depends(get_db)):
#     todos = TodoUtil(user_id, db).get_todos()
#     return todos


# @app.get("/user/{user_id}")
# def get_user(user_id: int, db: Session = Depends(get_db)):
#     return UserUtil(user_id, db).get_user()


# @app.post("/user/")
# def post_user(user: UserBase, db: Session = Depends(get_db)):
#     user_util = UserUtil(None, db)
#     if user_util.get_user_by_email(user.email):
#         raise HTTPException(status_code=400, detail="Email already registered")
#     user_util.post_user(user)
#     return True
