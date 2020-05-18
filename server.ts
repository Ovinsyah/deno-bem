import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { mahasiswa } from './data.ts';

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router.get("/mahasiswa", ctx => {
  ctx.response.body = Array.from(mahasiswa.values());
})
router.get("/mahasiswa/:id", ctx => {
  if(ctx.params && ctx.params.id && mahasiswa.has(ctx.params.id)){
    return ctx.response.body = mahasiswa.get(ctx.params.id);
  }
  return ctx.response.body = {};
})

app.use((ctx) => {
  ctx.response.body = "Running localhost:8000";
});

await app.listen({ port: 8000 });