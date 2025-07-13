# 🚀 前后端服务部署指南

## 📋 目录
- [环境要求](#环境要求)
- [本地开发部署](#本地开发部署)
- [生产环境部署](#生产环境部署)
- [Docker部署](#docker部署)
- [云平台部署](#云平台部署)
- [域名和SSL配置](#域名和ssl配置)
- [监控和日志](#监控和日志)
- [常见问题](#常见问题)

## 🎯 环境要求

### 基础环境
- **Node.js**: >= 20.0.0
- **pnpm**: >= 8.0.0
- **PM2**: >= 5.0.0 (生产环境)
- **Docker**: >= 20.0.0 (可选)
- **Nginx**: >= 1.20.0 (反向代理)

### 系统要求
- **CPU**: 2核心以上
- **内存**: 4GB以上
- **硬盘**: 20GB以上
- **网络**: 稳定的互联网连接

## 🔧 本地开发部署

### 1. 克隆项目
```bash
git clone <your-repo-url>
cd chat-sse-be
```

### 2. 安装依赖
```bash
pnpm install
```

### 3. 环境配置
```bash
# 设置环境变量
export DEEPSEEK_API_KEY="your_deepseek_api_key"
export SERVER_PORT=8121
export NODE_ENV=development
```

### 4. 启动开发服务器
```bash
# 开发模式（热重载）
pnpm run dev

# 或者先构建再运行
pnpm run build
pnpm run start
```

### 5. 验证部署
```bash
curl http://localhost:8121/models
```

## 🌐 生产环境部署

### 方案一：使用PM2部署

#### 1. 环境准备
```bash
# 安装PM2
npm install -g pm2

# 设置环境变量
export DEEPSEEK_API_KEY="your_deepseek_api_key"
```

#### 2. 一键部署
```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

#### 3. 手动部署步骤
```bash
# 1. 安装依赖
pnpm install --frozen-lockfile

# 2. 构建项目
pnpm run build

# 3. 启动服务
pm2 start ecosystem.config.js --env production

# 4. 保存配置
pm2 save
pm2 startup
```

#### 4. PM2常用命令
```bash
# 查看状态
pm2 status

# 查看日志
pm2 logs chat-sse-be

# 重启服务
pm2 restart chat-sse-be

# 停止服务
pm2 stop chat-sse-be

# 删除服务
pm2 delete chat-sse-be
```

### 方案二：Systemd服务

#### 1. 创建服务文件
```bash
sudo nano /etc/systemd/system/chat-sse-be.service
```

#### 2. 服务配置
```ini
[Unit]
Description=Chat SSE Backend Service
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/chat-sse-be
ExecStart=/usr/bin/node dist/index.js
Restart=always
RestartSec=10
Environment=NODE_ENV=production
Environment=SERVER_PORT=8121
Environment=DEEPSEEK_API_KEY=your_api_key

[Install]
WantedBy=multi-user.target
```

#### 3. 启动服务
```bash
sudo systemctl daemon-reload
sudo systemctl enable chat-sse-be
sudo systemctl start chat-sse-be
sudo systemctl status chat-sse-be
```

## 🐳 Docker部署

### 1. 创建环境变量文件
```bash
# 创建 .env 文件
echo "DEEPSEEK_API_KEY=your_deepseek_api_key" > .env
```

### 2. 构建镜像
```bash
# 构建镜像
docker build -t chat-sse-be .

# 或使用docker-compose
docker-compose build
```

### 3. 运行容器
```bash
# 单容器运行
docker run -d \
  --name chat-sse-be \
  -p 8121:8121 \
  -e DEEPSEEK_API_KEY=your_api_key \
  -v $(pwd)/logs:/app/logs \
  chat-sse-be

# 或使用docker-compose
docker-compose up -d
```

### 4. 容器管理
```bash
# 查看状态
docker-compose ps

# 查看日志
docker-compose logs -f chat-sse-be

# 重启服务
docker-compose restart chat-sse-be

# 停止服务
docker-compose down
```

## ☁️ 云平台部署

### 1. 阿里云ECS部署
```bash
# 1. 购买ECS实例
# 2. 配置安全组（开放80、443、8121端口）
# 3. 安装Docker和Docker Compose
# 4. 部署应用
```

### 2. 腾讯云CVM部署
```bash
# 1. 创建CVM实例
# 2. 配置防火墙
# 3. 安装运行环境
# 4. 部署应用
```

### 3. AWS EC2部署
```bash
# 1. 创建EC2实例
# 2. 配置Security Group
# 3. 使用ECS或直接部署
```

### 4. Vercel部署（Serverless）
```bash
# 1. 安装Vercel CLI
npm install -g vercel

# 2. 部署
vercel --prod
```

## 🔒 域名和SSL配置

### 1. 域名配置
```bash
# 添加DNS记录
# A记录：api.yourdomain.com -> 你的服务器IP
# CNAME记录：www.yourdomain.com -> yourdomain.com
```

### 2. SSL证书配置

#### 使用Let's Encrypt
```bash
# 安装certbot
sudo apt-get install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d api.yourdomain.com

# 自动续期
sudo crontab -e
# 添加: 0 12 * * * /usr/bin/certbot renew --quiet
```

#### 使用阿里云SSL证书
```bash
# 1. 在阿里云SSL控制台申请证书
# 2. 下载证书文件
# 3. 配置nginx
```

### 3. Nginx配置
```bash
# 复制nginx配置
sudo cp nginx/conf.d/api.conf /etc/nginx/conf.d/

# 测试配置
sudo nginx -t

# 重启nginx
sudo systemctl restart nginx
```

## 📊 监控和日志

### 1. 应用监控
```bash
# PM2监控
pm2 monit

# 或使用PM2 Plus
pm2 link <secret_key> <public_key>
```

### 2. 日志管理
```bash
# 查看应用日志
tail -f logs/app.log

# 查看错误日志
tail -f logs/error.log

# 日志轮转配置
sudo nano /etc/logrotate.d/chat-sse-be
```

### 3. 系统监控
```bash
# 安装监控工具
sudo apt-get install htop iotop nethogs

# 监控系统资源
htop
```

## 🔧 前端部署

### 1. 静态文件部署
```bash
# 构建前端项目
npm run build

# 部署到nginx
sudo cp -r dist/* /var/www/html/
```

### 2. 前端nginx配置
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:8121;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 🚨 常见问题

### 1. 端口被占用
```bash
# 查看端口占用
lsof -i :8121

# 杀死进程
sudo kill -9 <PID>
```

### 2. 权限问题
```bash
# 修改文件权限
chmod 755 scripts/deploy.sh
chown -R www-data:www-data /var/www/chat-sse-be
```

### 3. 内存不足
```bash
# 增加swap
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

### 4. API密钥无效
```bash
# 检查环境变量
echo $DEEPSEEK_API_KEY

# 重新设置
export DEEPSEEK_API_KEY="new_api_key"
pm2 restart chat-sse-be
```

## 📈 性能优化

### 1. 启用压缩
```bash
# nginx gzip压缩已在配置中启用
```

### 2. 缓存配置
```bash
# 静态资源缓存
# 已在nginx配置中设置
```

### 3. 负载均衡
```bash
# 使用PM2集群模式
pm2 start ecosystem.config.js --env production
```

## 🔄 持续集成/持续部署 (CI/CD)

### GitHub Actions示例
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '20'
    - name: Install dependencies
      run: pnpm install
    - name: Build
      run: pnpm run build
    - name: Deploy to server
      run: |
        # SSH到服务器并部署
        ssh user@server "cd /var/www/chat-sse-be && git pull && ./scripts/deploy.sh"
```

---

## 🎉 部署完成！

访问你的服务：
- **API服务**: `https://api.yourdomain.com`
- **前端应用**: `https://yourdomain.com`
- **健康检查**: `https://api.yourdomain.com/health`

如有问题，请查看日志或联系技术支持。 