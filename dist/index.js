"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("@koa/cors"));
const koa_1 = __importDefault(require("koa")); // 导入Koa框架 // 导入koa-router用于路由管理
const routes_1 = __importDefault(require("./routes"));
const app = new koa_1.default(); // 创建一个Koa应用实例
// 建立中间件实例
app.use(async (ctx, next) => {
    console.log(`Request: ${ctx.method} ${ctx.url}`);
    await next();
});
app.use((0, cors_1.default)());
// 使用路由中间件
app.use(routes_1.default.routes());
app.use(routes_1.default.allowedMethods());
// 启动服务器，监听3000端口
const port = process.env.SERVER_PORT ?? 8121;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
