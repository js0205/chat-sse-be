#!/bin/bash

# 部署脚本
echo "🚀 开始部署 chat-sse-be 服务..."

# 1. 检查环境
echo "📋 检查环境..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js 未安装"
    exit 1
fi

if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm 未安装"
    exit 1
fi

# 2. 安装依赖
echo "📦 安装依赖..."
pnpm install --frozen-lockfile

# 3. 构建项目
echo "🔨 构建项目..."
pnpm run build

# 4. 检查构建结果
if [ ! -f "dist/index.js" ]; then
    echo "❌ 构建失败"
    exit 1
fi

# 5. 安装PM2（如果未安装）
if ! command -v pm2 &> /dev/null; then
    echo "📦 安装 PM2..."
    npm install -g pm2
fi

# 6. 停止旧服务
echo "🛑 停止旧服务..."
pm2 stop chat-sse-be 2>/dev/null || true

# 7. 启动服务
echo "🚀 启动服务..."
pm2 start ecosystem.config.js --env production

# 8. 保存PM2配置
pm2 save

# 9. 设置开机自启
pm2 startup

echo "✅ 部署完成！"
echo "📊 查看状态: pm2 status"
echo "📋 查看日志: pm2 logs chat-sse-be" 