from fastapi import APIRouter
from app.api.v1.routes import health, organizations, profiles, roles, skills

api_router = APIRouter()

# Register v1 routes
api_router.include_router(health.router)
api_router.include_router(profiles.router)
api_router.include_router(organizations.router)
api_router.include_router(skills.router)
api_router.include_router(roles.router)
