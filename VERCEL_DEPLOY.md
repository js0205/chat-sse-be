# 🚀 Vercel 部署指南

## 📋 目录
- [准备工作](#准备工作)
- [部署步骤](#部署步骤)
- [环境变量配置](#环境变量配置)
- [API端点测试](#api端点测试)
- [本地开发](#本地开发)
- [常见问题](#常见问题)

## 🎯 准备工作

### 1. 环境要求
- **Node.js**: >= 18.0.0
- **Vercel CLI**: 最新版本
- **DeepSeek API Key**: 获取API密钥

### 2. 安装Vercel CLI
```bash
npm install -g vercel
```

### 3. 项目结构
```
chat-sse-be/
├── api/
│   ├── index.js        # 根路由
│   ├── models.js       # 模型列表API
│   ├── chat.js         # 聊天完成API
│   ├── health.js       # 健康检查API
│   └── package.json    # API依赖
├── vercel.json         # Vercel配置
└── VERCEL_DEPLOY.md    # 部署指南
```

## 🚀 部署步骤

### 方案一：使用Vercel CLI (推荐)

#### 1. 登录Vercel
```bash
vercel login
```

#### 2. 初始化项目
```bash
# 在项目根目录运行
vercel

# 按照提示操作：
# - Set up and deploy? [Y/n] y
# - Which scope? 选择你的账户
# - Link to existing project? [y/N] n
# - What's your project's name? chat-sse-api
# - In which directory is your code located? ./
```

#### 3. 配置环境变量
```bash
# 添加DeepSeek API密钥
vercel env add DEEPSEEK_API_KEY

# 输入你的API密钥
# 选择环境：Production, Preview, Development
```

#### 4. 部署到生产环境
```bash
vercel --prod
```

### 方案二：使用GitHub集成

#### 1. 推送代码到GitHub
```bash
git add .
git commit -m "Add Vercel deployment configuration"
git push origin main
```

#### 2. 在Vercel控制台导入项目
1. 访问 [Vercel控制台](https://vercel.com/dashboard)
2. 点击 "New Project"
3. 选择你的GitHub仓库
4. 配置项目设置
5. 点击 "Deploy"

## ⚙️ 环境变量配置

### 1. 必需的环境变量
```bash
DEEPSEEK_API_KEY=your_deepseek_api_key_here
NODE_ENV=production
```

### 2. 在Vercel控制台配置
1. 进入项目设置
2. 点击 "Environment Variables"
3. 添加以下变量：
   - `DEEPSEEK_API_KEY`: 你的DeepSeek API密钥
   - `NODE_ENV`: `production`

### 3. 使用Vercel CLI配置
```bash
# 生产环境
vercel env add DEEPSEEK_API_KEY production

# 预览环境
vercel env add DEEPSEEK_API_KEY preview

# 开发环境
vercel env add DEEPSEEK_API_KEY development
```

## 🔗 API端点测试

部署完成后，你的API将在 `https://your-project.vercel.app` 可用。

### 端点列表
- **根路由**: `GET /api/` - API信息
- **聊天**: `POST /api/chat` - 聊天完成
- **模型**: `GET /api/models` - 模型列表
- **健康检查**: `GET /api/health` - 服务健康状态

### 测试命令
```bash
# 获取API信息
curl https://your-project.vercel.app/api/

# 测试聊天API
curl -X POST https://your-project.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello!"}'

# 获取模型列表
curl https://your-project.vercel.app/api/models

# 健康检查
curl https://your-project.vercel.app/api/health
```

## 🛠️ 本地开发

### 1. 安装依赖
```bash
cd api
npm install
```

### 2. 设置环境变量
```bash
# 创建.env文件
echo "DEEPSEEK_API_KEY=your_api_key" > .env
```

### 3. 启动开发服务器
```bash
# 在项目根目录运行
vercel dev
```

### 4. 测试本地API
```bash
# 测试本地端点
curl http://localhost:3000/api/
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello!"}'
```

## 📊 监控和日志

### 1. 查看部署日志
```bash
vercel logs
```

### 2. 实时日志
```bash
vercel logs --follow
```

### 3. Vercel控制台监控
- 访问 [Vercel控制台](https://vercel.com/dashboard)
- 查看项目的Functions、Analytics、Logs等

## 🎨 前端集成

### 1. 更新前端API地址
```javascript
// 在前端代码中使用Vercel API地址
const apiUrl = 'https://your-project.vercel.app/api';
```

### 2. 部署前端到Vercel
```bash
# 在前端项目目录
vercel --prod
```

## 🔒 安全配置

### 1. 域名配置
```bash
# 添加自定义域名
vercel domains add your-domain.com
```

### 2. CORS配置
API已经配置了CORS，支持跨域请求。

### 3. 速率限制
考虑在API中添加速率限制：
```javascript
// 可以集成rate-limiter-flexible等库
```

## 📈 性能优化

### 1. 冷启动优化
- 使用轻量级依赖
- 优化函数代码
- 考虑使用Edge Functions

### 2. 缓存策略
```javascript
// 在API响应中添加缓存头
res.setHeader('Cache-Control', 's-maxage=60');
```

## 🚨 常见问题

### 1. 部署失败
```bash
# 检查vercel.json配置
# 确保所有文件路径正确
# 检查依赖项是否正确安装
```

### 2. 环境变量不生效
```bash
# 检查环境变量名称是否正确
vercel env ls

# 重新部署
vercel --prod
```

### 3. API调用失败
```bash
# 检查CORS配置
# 确认API密钥是否正确
# 查看函数日志
vercel logs
```

### 4. 函数超时
```javascript
// Vercel免费版函数超时限制为10秒
// 付费版可以配置更长的超时时间
```

## 🎯 最佳实践

### 1. 错误处理
```javascript
// 统一错误处理
try {
  // API调用
} catch (error) {
  console.error('API Error:', error);
  res.status(500).json({
    error: 'Internal Server Error',
    message: error.message
  });
}
```

### 2. 日志记录
```javascript
// 添加详细日志
console.log('Request:', req.method, req.url);
console.log('Body:', req.body);
```

### 3. 性能监控
```javascript
// 记录执行时间
const start = Date.now();
// ... 处理逻辑
console.log('Execution time:', Date.now() - start, 'ms');
```

## 📝 更新和维护

### 1. 代码更新
```bash
# 更新代码后重新部署
git add .
git commit -m "Update API"
git push origin main
# Vercel会自动重新部署
```

### 2. 依赖更新
```bash
cd api
npm update
vercel --prod
```

### 3. 监控告警
- 设置Vercel的通知
- 配置错误监控（如Sentry）
- 定期检查API性能

---

## 🎉 部署完成！

你的Chat SSE API现在已经部署到Vercel！

### 下一步：
1. 测试所有API端点
2. 配置自定义域名
3. 集成到前端应用
4. 设置监控和告警

### 相关链接：
- [Vercel文档](https://vercel.com/docs)
- [Vercel CLI文档](https://vercel.com/docs/cli)
- [DeepSeek API文档](https://platform.deepseek.com/api-docs)

如有问题，请参考常见问题部分或联系技术支持。 