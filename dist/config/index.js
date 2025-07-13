"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_ENV = exports.SERVER_PORT = exports.DEEPSEEK_API_KEY = void 0;
// 环境变量配置
exports.DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || '';
// 服务器配置
exports.SERVER_PORT = process.env.SERVER_PORT || 8121;
// 其他配置
exports.NODE_ENV = process.env.NODE_ENV || 'development';
