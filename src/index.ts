import cors from '@koa/cors';
import Koa from 'koa'; // 导入Koa框架 // 导入koa-router用于路由管理
import router from './routes';

const app = new Koa(); // 创建一个Koa应用实例

// 建立中间件实例
app.use(async (ctx, next) => {
  console.log(`Request: ${ctx.method} ${ctx.url}`);
  await next();
});

app.use(cors());
// 使用路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

// 启动服务器，监听3000端口
const port = (process.env.SERVER_PORT as string) ?? 8121;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
