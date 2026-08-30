from enum import StrEnum


class UserRole(StrEnum):
    LEARNER = "learner"
    EMPLOYER = "employer"
    ADMIN = "admin"


class OrgRole(StrEnum):
    OWNER = "owner"
    ADMIN = "admin"
    RECRUITER = "recruiter"
    EVALUATOR = "evaluator"
    MEMBER = "member"


class VerificationStatus(StrEnum):
    UNVERIFIED = "unverified"
    PENDING = "pending"
    VERIFIED = "verified"
    REJECTED = "rejected"
    REVOKED = "revoked"
    EXPIRED = "expired"


class ApplicationStatus(StrEnum):
    SUBMITTED = "submitted"
    REVIEWING = "reviewing"
    SHORTLISTED = "shortlisted"
    REJECTED = "rejected"
    ACCEPTED = "accepted"
    WITHDRAWN = "withdrawn"


class ExperienceType(StrEnum):
    EMPLOYER_PROJECT = "employer_project"
    INTERNSHIP = "internship"
    APPRENTICESHIP = "apprenticeship"
    FREELANCE = "freelance"
    PRACTICAL_CHALLENGE = "practical_challenge"


class SubmissionStatus(StrEnum):
    DRAFT = "draft"
    SUBMITTED = "submitted"
    UNDER_REVIEW = "under_review"
    EVALUATED = "evaluated"
    REJECTED = "rejected"


class AttemptStatus(StrEnum):
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    EXPIRED = "expired"
    ABANDONED = "abandoned"


class OpportunityStatus(StrEnum):
    DRAFT = "draft"
    PUBLISHED = "published"
    CLOSED = "closed"
    ARCHIVED = "archived"


class ErrorCode(StrEnum):
    VALIDATION_ERROR = "VALIDATION_ERROR"
    AUTHENTICATION_REQUIRED = "AUTHENTICATION_REQUIRED"
    INVALID_TOKEN = "INVALID_TOKEN"
    TOKEN_EXPIRED = "TOKEN_EXPIRED"
    PERMISSION_DENIED = "PERMISSION_DENIED"
    RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND"
    RESOURCE_CONFLICT = "RESOURCE_CONFLICT"
    ATTEMPT_EXPIRED = "ATTEMPT_EXPIRED"
    ATTEMPT_ALREADY_COMPLETED = "ATTEMPT_ALREADY_COMPLETED"
    SUBMISSION_NOT_ALLOWED = "SUBMISSION_NOT_ALLOWED"
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR"
