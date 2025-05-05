import axios from 'axios'; // 导入axios库，用于发送HTTP请求
import { DEEPSEEK_API_KEY } from '../config'; // 从config文件中导入DEEPSEEK_API_KEY

const deepseekReuqest = axios.create({
  // 创建一个axios实例
  baseURL: 'https://api.deepseek.com', // 设置基础URL
  timeout: 10000, // 设置请求超时时间为10秒
  withCredentials: true, // 允许跨域请求携带凭证
  headers: {
    // 设置请求头
    Authorization: `Bearer ${DEEPSEEK_API_KEY}` // 在请求头中添加Authorization字段，使用Bearer Token认证
  }
});

deepseekReuqest.interceptors.request.use((config) => {
  // 添加请求拦截器
  return config; // 直接返回配置对象，不做任何修改
});

deepseekReuqest.interceptors.response.use((response) => {
  // 添加响应拦截器
  return response; // 直接返回响应对象，不做任何修改
});

export { deepseekReuqest }; // 导出deepseekReuqest实例，供其他模块使用
