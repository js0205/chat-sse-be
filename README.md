# NODE版本

> 22.07

# 项目目录

├─app.ts // 应用入口
├─routes // 路由
| ├─private.js // 校验接口
| └public.js // 公开接口
├─models // 数据库配置及模型
| ├─index.js // 数据库配置
| └user.js // 用户的schema文件
├─middlewares // 中间件
| ├─cors.js // 跨域中间件
| ├─jwt.js // jwt中间件
| ├─logger.js // 日志打印中间件
| └response.js // 响应及异常处理中间件
├─logs // 日志目录
| ├─koa-template.log
| └koa-template.log-2019-05-28
├─lib // 工具库
| ├─error.js // 异常处理
| └mongoDB.js // mongoDB配置
├─controllers // 操作业务逻辑
| ├─index.js // 配置
| ├─login.js // 登录
| └test.js // 测试
├─services // 操作数据库
| ├─index.js // 配置
| ├─user.js // 用户
├─bin // 启动目录
| └www // 启动文件配置
