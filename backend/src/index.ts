import { Elysia } from "elysia";

const port = Bun.env.PORT || 3000;

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/hello", ({ params: { name } }) => `Hello ${name}`)
  .listen(port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
