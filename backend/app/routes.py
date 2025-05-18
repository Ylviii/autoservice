from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from . import models, schemas
from .database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/users/", response_model=schemas.UserOut)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = models.User(
        username=user.username,
        full_name=user.full_name,
        password_hash=user.password,  # хэшируй в будущем!
        role_id=1  # по умолчанию client
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
