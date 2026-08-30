from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.dependencies.database import get_db
from app.repositories.organization_repo import OrganizationRepository
from app.repositories.profile_repo import ProfileRepository
from app.repositories.role_repo import RoleRepository
from app.repositories.skill_repo import SkillRepository
from app.services.organization_service import OrganizationService
from app.services.profile_service import ProfileService
from app.services.role_service import RoleService
from app.services.skill_service import SkillService


def get_profile_service(session: AsyncSession = Depends(get_db)) -> ProfileService:
    repo = ProfileRepository(session)
    return ProfileService(repo)


def get_organization_service(session: AsyncSession = Depends(get_db)) -> OrganizationService:
    org_repo = OrganizationRepository(session)
    profile_repo = ProfileRepository(session)
    return OrganizationService(org_repo, profile_repo)


def get_skill_service(session: AsyncSession = Depends(get_db)) -> SkillService:
    repo = SkillRepository(session)
    return SkillService(repo)


def get_role_service(session: AsyncSession = Depends(get_db)) -> RoleService:
    role_repo = RoleRepository(session)
    skill_repo = SkillRepository(session)
    return RoleService(role_repo, skill_repo)
