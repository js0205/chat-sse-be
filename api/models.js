const axios = require('axios');

// 创建DeepSeek请求实例
const deepseekRequest = axios.create({
  baseURL: 'https://api.deepseek.com',
  timeout: 10000,
  headers: {
    'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

// 处理CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization',
};

module.exports = async (req, res) => {
  // 处理CORS预检请求
  if (req.method === 'OPTIONS') {
    res.status(200).json({});
    return;
  }

  // 只允许GET请求
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    // 调用DeepSeek API获取模型列表
    const response = await deepseekRequest.get('/models');
    
    // 设置CORS头
    Object.entries(corsHeaders).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
    
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching models:', error);
    
    // 设置CORS头
    Object.entries(corsHeaders).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
    
    res.status(500).json({ 
      error: 'Internal Server Error',
      message: error.message 
    });
  }
}; 