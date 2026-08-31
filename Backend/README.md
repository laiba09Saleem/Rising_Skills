# Rising Skills — Backend

Production-grade FastAPI backend for **Rising Skills** — A Skills-to-Opportunity platform.

## Architecture

The backend is built as a **Modular Monolith** with strict layered separation:
- **API Layer (`app/api/v1/`)**: HTTP endpoints, schema validation, zero business logic.
- **Dependencies (`app/dependencies/`)**: Supabase JWT authentication, RBAC authorization guards, DB session injection.
- **Services (`app/services/`)**: Core domain rules, assessment scoring, deterministic matching.
- **Repositories (`app/repositories/`)**: Data-access contracts isolating database operations.
- **Integrations (`app/integrations/`)**: Supabase GoTrue Auth, Groq AI (Pydantic validated).

## Local Development Setup

1. **Create and Activate Virtual Environment**:
   ```bash
   python -m venv .venv
   .venv\Scripts\activate  # Windows
   ```

2. **Install Dependencies**:
   ```bash
   pip install -e ".[dev,ai]"
   ```

3. **Configure Environment**:
   ```bash
   cp .env.example .env
   # Edit .env with your Supabase credentials
   ```

4. **Run Database Migrations**:
   ```bash
   alembic upgrade head
   ```

5. **Start Development Server**:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

6. **Run Tests**:
   ```bash
   pytest
   ```
