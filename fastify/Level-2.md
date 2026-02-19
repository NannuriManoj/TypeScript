# 🟢 Fastify Level 2 — TypeScript Typing & Generics

Use it when Fastify typing feels confusing or when `request.params` / `request.body` shows up as `unknown`.

> 🎯 **Level 2 Goal**: Understand how Fastify uses TypeScript generics to type requests and responses — and why it never auto-infers them.

---

Level 2 is **only about typing**, not runtime behavior.

---

## 1️⃣ What is `FastifyInstance`?

```ts
const fastify = Fastify()
```

* `fastify` is a **FastifyInstance**
* It represents the running server
* It is responsible for:

  * registering routes
  * handling requests
  * sending responses

You usually don’t need to type it explicitly — Fastify does it for you.

---

## 2️⃣ Why Fastify Cannot Auto‑Infer Types

Example:

```ts
fastify.get('/users/:id', async (request) => {
  request.params.id
})
```

Why TypeScript is confused:

* `'/users/:id'` is just a **string**
* TypeScript cannot analyze runtime strings
* HTTP input is **untrusted**

> Fastify will never guess request shapes.
> You must define them explicitly.

This is intentional design, not a limitation.

---

## 3️⃣ The Core Concept — Route Generics

```ts
fastify.get<{
  Params: {...}
  Querystring: {...}
  Body: {...}
  Reply: {...}
}>(url, handler)
```

This generic tells Fastify:

> “For this route, this is the exact request & response contract.”

---

## 4️⃣ `Params` — URL Parameters

```ts
fastify.get<{
  Params: { id: string }
}>('/users/:id', async (request) => {
  const id = request.params.id
})
```

Notes:

* Params are **always strings** at runtime
* Conversion is your responsibility

---

## 5️⃣ `Querystring` — Query Parameters

```ts
fastify.get<{
  Querystring: {
    q: string
    limit?: number
  }
}>('/search', async (request) => {
  const { q, limit } = request.query
})
```

Notes:

* Query params arrive as strings
* TypeScript typing ≠ validation

---

## 6️⃣ `Body` — Request Body (POST / PUT)

```ts
fastify.post<{
  Body: {
    email: string
    password: string
  }
}>('/register', async (request) => {
  const { email, password } = request.body
})
```

Benefits:

* TS errors if body is missing fields
* Safer refactoring

---

## 7️⃣ `Reply` — Response Typing

```ts
fastify.get<{
  Reply: {
    id: number
    email: string
  }
}>('/profile', async () => {
  return { id: 1, email: 'manoj@gmail.com' }
})
```

If returned object doesn’t match the type → **TypeScript error**.

This enforces API contracts.

---

## 8️⃣ Typing vs Validation (VERY IMPORTANT)

| Concept          | Purpose             |
| ---------------- | ------------------- |
| TypeScript       | Compile‑time safety |
| Fastify generics | API contracts       |
| Validation (Zod) | Runtime safety      |

> Level 2 = compile‑time only

---

## 9️⃣ Why Explicit Typing Matters

* Prevents silent bugs
* Documents APIs
* Makes refactoring safe
* Matches real backend engineering practices

Fastify philosophy:

> Explicit is safer than clever.

---

## 🧪 Level 2 Practice Tasks (Checklist)

### ✅ Task 1 — Params

* Type `id`
* Convert to number
* Handle invalid input

### ✅ Task 2 — Querystring

* Required `q`
* Optional `limit`

### ✅ Task 3 — Body

* Typed request body
* No `any`

### ✅ Task 4 — Reply

* Typed response
* Wrong return shape must fail TS

---

## ✅ Level 2 Completion Checklist

You should confidently answer:

* Why Fastify does not infer request types
* What route generics do
* Difference between typing & validation
* Why backend APIs need contracts
