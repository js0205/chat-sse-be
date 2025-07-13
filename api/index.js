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
    // 返回API信息
    res.status(200).json({
      name: 'Chat SSE API',
      version: '1.0.0',
      description: 'Chat SSE Backend API deployed on Vercel',
      endpoints: {
        models: '/api/models',
        chat: '/api/chat'
      },
      status: 'running',
      timestamp: new Date().toISOString()
    });
  } else if (req.method === 'POST') {
    // 重定向到聊天端点
    try {
      const chatHandler = require('./chat');
      await chatHandler(req, res);
    } catch (error) {
      console.error('Error handling chat request:', error);
      res.status(500).json({
        error: 'Internal Server Error',
        message: error.message
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}; 