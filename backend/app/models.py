from sqlalchemy import Column, Integer, String, ForeignKey, Text
from sqlalchemy.orm import relationship
from .database import Base

class Role(Base):
    __tablename__ = "roles"
    id = Column(Integer, primary_key=True)
    name = Column(String, unique=True)

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True)
    full_name = Column(String)
    password_hash = Column(Text)
    role_id = Column(Integer, ForeignKey("roles.id"))

    role = relationship("Role")

class Car(Base):
    __tablename__ = "cars"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    brand = Column(String)
    model = Column(String)
    license_plate = Column(String, unique=True)

class Order(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True)
    car_id = Column(Integer, ForeignKey("cars.id"))
    description = Column(Text)
    status = Column(String, default="created")
    mechanic_id = Column(Integer, ForeignKey("users.id"))
