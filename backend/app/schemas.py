from pydantic import BaseModel

class UserBase(BaseModel):
    username: str
    full_name: str

class UserCreate(UserBase):
    password: str

class UserOut(UserBase):
    id: int
    role_id: int

    class Config:
        orm_mode = True
