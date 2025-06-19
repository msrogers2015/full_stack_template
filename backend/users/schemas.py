from ninja import ModelSchema
from .models import CustomUser
from pydantic import BaseModel

class SignInSchema(BaseModel):
    email: str
    password: str