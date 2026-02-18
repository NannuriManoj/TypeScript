# 🟢 Fastify Level 1 — Core Fundamentals

> 🎯 **Level 1 Goal**: Clearly understand how a request enters Fastify, is handled, and returns a response.

we should understand the **request → handler → response** flow

---

Level 1 is **only** about server + routes.

---

## 1️⃣ What is Fastify?

Fastify is a **Node.js HTTP framework**.

It:

* Receives HTTP requests
* Matches routes
* Executes handlers
* Sends responses

Fastify is **not**:

* A database
* A validator
* A full backend by itself

---

## 2️⃣ Creating a Fastify Server

```ts
import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})
```

### Mental model

* `Fastify()` creates a **server instance**
* This instance stores routes & config
* Nothing runs yet

---

## 3️⃣ Starting the Server (`listen`)

```ts
await fastify.listen({ port: 3000 })
```

### Key rule

> Until `listen()` is called, the server does nothing.

---

## 4️⃣ Routes (Most Important Concept)

A route = **HTTP Method + URL + Handler**

```ts
fastify.get('/health', async (request, reply) => {
  return { status: 'ok' }
})
```

### Request Flow

```
Client → Route Match → Handler → Response
```

---

## 5️⃣ HTTP Methods (Level 1 only)

You only need:

* `GET` → fetch data
* `POST` → send data

Ignore others for now.

---

## 6️⃣ Route Handler

```ts
async (request, reply) => { ... }
```

### `request` contains:

* `params` (URL params)
* `query` (query string)
* `body` (POST data)
* `headers`

### `reply` controls:

* Status code
* Headers
* Response body

---

## 7️⃣ Returning vs `reply.send()`

### Using `return`

```ts
return { message: 'Hello' }
```

* Status: 200
* JSON response automatically

### Using `reply`

```ts
reply.code(201).send({ message: 'Created' })
```

### Rule for Level 1

> Use `return` unless you need a custom status code.

---

## 8️⃣ Route Parameters (`:id`)

```ts
fastify.get('/users/:id', async (request) => {
  const id = request.params.id
})
```

Request:

```
/users/10
```

Params:

```ts
{ id: '10' }
```

⚠️ Params are **strings by default**.

---

## 9️⃣ Query Parameters

```ts
fastify.get('/users', async (request) => {
  const page = request.query.page
})
```

Request:

```
/users?page=2
```

---

## 🔟 Request Body (POST)

```ts
fastify.post('/echo', async (request) => {
  const body = request.body
})
```

⚠️ No validation yet — assume `unknown`.

---

## 1️⃣1️⃣ Async Handlers

Fastify handlers are async by default:

```ts
fastify.get('/data', async () => {
  return await fetchData()
})
```

Fastify waits for the promise and sends the result.

---

## 🧪 Level 1 Practice Tasks

### ✅ Task 1 — Health Check

`GET /health`

```json
{ "status": "ok" }
```

---

### ✅ Task 2 — Dynamic Route

`GET /hello/:name`

```json
{ "message": "Hello Manoj" }
```

---

### ✅ Task 3 — Query Params

`GET /square?num=5`

```json
{ "result": 25 }
```

---

### ✅ Task 4 — POST Body

`POST /echo`

Request:

```json
{ "msg": "Hi" }
```

Response:

```json
{ "msg": "Hi" }
```

---

## ✅ Level 1 Completion Checklist

You should be able to answer:

* What does `Fastify()` create?
* When does the server actually start?
* How does a request reach a handler?
* What lives inside `request`?
* When should I use `reply` vs `return`?

---
