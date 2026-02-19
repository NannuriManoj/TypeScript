# 🟢 Fastify Level 3 — Zod (Validation & Runtime Contracts)

> 🎯 **Level 3 Goal**: Understand runtime validation vs compile-time typing and build APIs that safely reject invalid input.

---

Level 3 is strictly about **input validation and contracts**.

---

## 1️⃣ Why TypeScript is NOT validation

TypeScript:

* Runs at **compile time**
* Does **not exist in production**
* Protects the **developer**, not the API

Example:

```ts
fastify.post<{ Body: { email: string } }>(
  '/login',
  async (request) => {
    request.body.email;
  }
);
```

At runtime, users can still send:

```json
{}
```

➡️ Result: **crash or undefined behavior**

> TypeScript answers: “Did I write correct code?”

---

## 2️⃣ What Zod does

Zod is a **runtime schema validation library**.

It:

* Validates real user input
* Rejects invalid requests
* Produces structured error messages
* Narrows TypeScript types after validation

> Zod answers: “Did the user send correct data?”

---

## 3️⃣ What a Zod Schema is

> A Zod schema is a **runtime rulebook** that defines what valid data looks like.

Example:

```ts
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
```

This means:

* Input must be an object
* `email` must be a valid email string
* `password` must be a string with min length 6

---

## 4️⃣ Creating Your Own Schema (Thinking Process)

Before writing code, ask:

* What fields exist?
* Are they required or optional?
* What type should each field be?
* What constraints should apply?

Then translate rules → Zod methods.

---

## 5️⃣ `parse()` vs `safeParse()` (CRITICAL)

### ❌ `parse()`

```ts
loginSchema.parse(data);
```

* Throws an exception
* Crashes request if not caught
* Not suitable for APIs

### ✅ `safeParse()`

```ts
const result = loginSchema.safeParse(data);
```

Returns:

```ts
{ success: true, data }
```

OR

```ts
{ success: false, error }
```

> Always use `safeParse()` in Fastify routes.

---

## 6️⃣ Never Trust `request.body`

❌ Bad:

```ts
const email = request.body.email;
```

✅ Good:

```ts
const result = schema.safeParse(request.body);
const { email } = result.data;
```

> Only use **validated data**.

---

## 7️⃣ Zod + TypeScript Working Together

After `safeParse()` success:

* Zod guarantees runtime validity
* TypeScript narrows types automatically

```ts
if (result.success) {
  result.data.email; // typed and safe
}
```

---

## 8️⃣ Zod Coercion (IMPORTANT)

HTTP inputs (query, params) are always strings.

Use coercion to convert before validation:

```ts
z.coerce.number()
z.coerce.boolean()
```

Example:

```ts
const querySchema = z.object({
  limit: z.coerce.number().int().min(1).optional(),
});
```

Order:

```
coerce → validate
```

---

## 9️⃣ Common Schema Types

* String: `z.string()`
* Number: `z.number()`
* Boolean: `z.boolean()`
* Object: `z.object({ ... })`
* Array: `z.array(schema)`
* Enum: `z.enum([...])`
* Union: `z.union([...])`

Schemas are **not limited to objects**.

---

## 🧪 Level 3 Task — POST /login

### Requirements

* Validate email & password
* Reject invalid input
* Use Zod schema
* Fail gracefully

### Example Implementation

```ts
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

fastify.post('/login', async (request, reply) => {
  const result = loginSchema.safeParse(request.body);

  if (!result.success) {
    reply.code(400).send({
      error: 'Invalid request body',
      details: result.error.format(),
    });
    return;
  }

  const { email, password } = result.data;

  return { message: 'Login successful', email };
});
```

---

## ✅ Level 3 Completion Checklist

You should now confidently explain:

* Why TypeScript is not runtime validation?
* What a Zod schema represents?
* Difference between `parse` and `safeParse`.
* Why coercion is needed for query params?
* Why validated data must be used?

---
