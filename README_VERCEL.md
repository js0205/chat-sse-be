# 🚀 Vercel 部署 Chat SSE 后端

## 📋 快速开始

### 1. 一键部署
```bash
# 安装Vercel CLI
npm install -g vercel

# 登录Vercel
vercel login

# 部署项目
vercel

# 配置环境变量
vercel env add DEEPSEEK_API_KEY

# 部署到生产环境
vercel --prod
```

### 2. 项目结构
```
chat-sse-be/
├── api/
│   ├── index.js      # 根路由 GET/POST /api/
│   ├── models.js     # 模型列表 GET /api/models
│   ├── chat.js       # 聊天API POST /api/chat
│   ├── health.js     # 健康检查 GET /api/health
│   └── package.json  # 依赖配置
├── vercel.json       # Vercel配置
└── VERCEL_DEPLOY.md  # 详细部署指南
```

### 3. API 端点
- **GET /api/** - API信息
- **POST /api/chat** - 聊天完成
- **GET /api/models** - 模型列表  
- **GET /api/health** - 健康检查

### 4. 环境变量
- `DEEPSEEK_API_KEY` - 你的DeepSeek API密钥（必需）
- `NODE_ENV` - 环境模式（可选，默认production）

### 5. 测试部署
```bash
# 部署完成后测试
curl https://your-project.vercel.app/api/health

# 测试聊天API
curl -X POST https://your-project.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello!"}'
```

## 🎯 优势

✅ **Serverless** - 无服务器架构，自动扩缩容  
✅ **免费额度** - 个人项目免费使用  
✅ **自动部署** - Git推送自动部署  
✅ **全球CDN** - 快速访问速度  
✅ **HTTPS** - 自动SSL证书  
✅ **监控** - 内置监控和日志  

## 📚 详细文档

查看完整部署指南：[VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md)

## 🔗 相关链接

- [Vercel官网](https://vercel.com)
- [DeepSeek API](https://platform.deepseek.com)
- [项目示例](https://chat-sse-api.vercel.app)

---

**🎉 现在你可以将后端API部署到Vercel了！** 