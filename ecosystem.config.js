module.exports = {
  apps: [
    {
      name: 'chat-sse-be',
      script: 'dist/index.js',
      instances: 'max', // 使用所有CPU核心
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        SERVER_PORT: 8121,
        DEEPSEEK_API_KEY: process.env.DEEPSEEK_API_KEY
      },
      env_production: {
        NODE_ENV: 'production',
        SERVER_PORT: 8121
      },
      // 日志配置
      log_file: './logs/app.log',
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      
      // 重启策略
      max_restarts: 10,
      min_uptime: '10s',
      max_memory_restart: '1G',
      
      // 其他配置
      watch: false,
      ignore_watch: ['node_modules', 'logs'],
      
      // 健康检查
      health_check_grace_period: 3000,
      health_check_interval: 5000
    }
  ]
}; 