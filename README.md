# TypeScript Backend Engineering 🚀

> A hands-on collection of TypeScript projects — each folder is an independent project built to learn and implement a specific backend concept. Not just theory, working code.

---

## 👨‍💻 About This Repo

This is my learning lab for backend engineering with TypeScript. Every project here was built to answer a real question I had while studying — the kind of questions that only get answered by actually building something.

The progression is intentional — starting from TypeScript fundamentals, moving into real APIs with Fastify, adding Zod for validation and transformation, and finishing with what a production-ready structure actually looks like.

---

## 📁 Project Structure

```
TypeScript/
├── Fundamentals/                  # TypeScript core concepts
├── fastify/                       # Fastify framework exploration  
├── TodoAPI/                       # REST API — Fastify + Zod
├── PetStoreAPI/                   # REST API — Fastify + Zod
├── fastify-zod-api/               # Deep dive into validation & transformation
└── TypeScript-Production-Ready/   # Production folder structure reference
```

---

## 📦 Projects

### 1. `Fundamentals/`
Before touching any framework, I spent time here getting comfortable with TypeScript itself — understanding the type system and how it changes the way you write JavaScript.

**What's covered:**
- Core types and type annotations
- Interfaces and type aliases
- Typed functions and return types
- Classes and access modifiers
- Generics and utility types

**Key learning:** TypeScript catches errors at compile time that would otherwise only show up as runtime bugs.

---

### 2. `fastify/`
First hands-on project with Fastify. Built to understand the framework fundamentals — routing, request/response lifecycle, and how it compares to Express.

**What's covered:**
- Fastify server setup with TypeScript
- Route definitions and typed handlers
- Request and response typing
- Core Fastify patterns

**Key learning:** Fastify is schema-driven and TypeScript-friendly by design — far less boilerplate when working with types.

---

### 3. `TodoAPI/` ⭐
A complete Todo REST API built with **Fastify + Zod**. Where the controller/service/repository pattern started clicking in practice.

**What's covered:**
- Full CRUD operations
- Fastify routing and request handling
- Zod schemas for request validation
- Typed inputs and outputs throughout

**Key learning:** Validation at the entry point means your business logic never has to deal with bad or unexpected data.

---

### 4. `PetStoreAPI/` ⭐
A Pet Store REST API — independent project, same stack (**Fastify + Zod**), different domain. Built to reinforce the patterns from TodoAPI.

**What's covered:**
- Fastify routes for pet store operations
- Zod validation on all incoming requests
- Type-safe handlers throughout

**Key learning:** Building the same patterns across different domains solidifies the mental model far better than reading about it once.

---

### 5. `fastify-zod-api/` ⭐
The most concept-heavy project in this repo. Built to go deep on **validation types and transformation** — the real reasons Zod exists beyond basic type checking.

**What's covered:**
- All four types of validation in practice:
  - **Type validation** — enforcing schema types (string, number, boolean)
  - **Syntactic validation** — checking format (valid email structure, phone number format)
  - **Semantic validation** — checking meaning (a date of birth can't be in the future)
  - **Complex validation** — conditional rules (if `isMarried: true`, `partnerName` becomes required)
- **Automatic type transformation** — query params and route params always arrive as strings; Zod converts them to the correct type based on the schema

**Key learning:** Transformation was the most surprising part. `/users?age=25` passes `"25"` not `25` to your server. Zod handles the conversion silently based on your schema definition.

---

### 6. `TypeScript-Production-Ready/`
Not a feature API — a reference project showing what a **production-ready folder structure** looks like. The focus is architecture and organisation.

**What's covered:**
- The 3-layer architecture:

```
Request
   ↓
Controller  →  validates & transforms input, handles HTTP codes
   ↓
Service     →  business logic, no knowledge of HTTP
   ↓
Repository  →  database interaction, no knowledge of business rules
   ↓
Response
```

- Separation of concerns between layers
- Scalable folder structure
- Error handling with correct HTTP status codes

**Key learning:** The folder structure IS the architecture. A well-organised project tells you how it works before you read a single line of code.

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| TypeScript | Type-safe JavaScript across all projects |
| Fastify | Web framework used in API projects |
| Zod | Schema validation and type transformation |
| Node.js | Runtime environment |

---

## 🚀 Getting Started

Each folder is an independent project. To run any of them:

```bash
# Clone the repo
git clone https://github.com/NannuriManoj/TypeScript.git

# Navigate into any project
cd TypeScript/fastify-zod-api

# Install dependencies
npm install

# Run in development mode
npm run dev
```

---

## 🧠 Recommended Order

If you want to follow the same learning path:

```
1. Fundamentals               → Get comfortable with TypeScript
2. fastify                    → Understand the framework
3. TodoAPI                    → Build a real API with validation
4. PetStoreAPI                → Reinforce the patterns
5. fastify-zod-api            → Go deep on validation and transformation
6. TypeScript-Production-Ready → See how it fits in a real codebase
```

---

## 📖 Related Writing

- 📝 [Authentication & Authorization: From Wax Seals to JWTs](https://medium.com/@nannurimanoj26/authentication-and-authorization-5ea0dd14fe1a)

---

## 🤝 Connect

- 💼 [LinkedIn](https://www.linkedin.com/in/nannurimanoj)
- 📝 [Medium](https://medium.com/@nannurimanoj26)

---

*Built with curiosity, confusion, and a lot of `console.log()` 😄*
