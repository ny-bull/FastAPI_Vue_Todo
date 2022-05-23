from fastapi import HTTPException
from typing import List
from fastapi import Depends, FastAPI
import app.models.models as models
import app.models.database as database
from .routers import user_router, todo_router
from starlette.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=database.engine)


app = FastAPI()
app.include_router(user_router.router)
app.include_router(todo_router.router)

# CORSを回避するために追加（今回の肝）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}
