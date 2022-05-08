from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"


# DB接続用のインスタンス
# どのDBにどうやって接続するかを設定したものがエンジン
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})

# クエリを実行する際にセッションを介する
# DBとPythonコードを紐づけするようなもの
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# モデルクラスのベースを作成(これを継承して各モデルを作成)
Base = declarative_base()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
