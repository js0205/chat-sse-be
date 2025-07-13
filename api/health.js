// 处理CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization',
};

module.exports = async (req, res) => {
  // 处理CORS预检请求
  if (req.method === 'OPTIONS') {
    Object.entries(corsHeaders).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
    res.status(200).json({});
    return;
  }

  // 设置CORS头
  Object.entries(corsHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  if (req.method === 'GET') {
    // 检查环境变量
    const hasApiKey = !!process.env.DEEPSEEK_API_KEY;
    
    res.status(200).json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      apiKey: hasApiKey ? 'configured' : 'missing',
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      version: process.version
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}; 