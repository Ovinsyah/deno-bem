import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import router from './app/routes/index.ts'
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use((ctx) => {
  ctx.response.body = "Running localhost:8000";
});

await app.listen({ port: 8000 });