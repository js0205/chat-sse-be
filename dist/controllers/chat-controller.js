"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ts-ignore
const chat_completion_1 = require("@/apis/chat-completion");
// 定义 authMiddleware 函数
const chatController = async (ctx) => {
    ctx.type = 'application/event-stream';
    try {
        ctx.body = await (0, chat_completion_1.chatCompletion)();
    }
    catch (error) {
        ctx.status = 500;
        ctx.body = { error: 'Internal Server Error' };
        console.error(error);
    }
};
// 导出 authMiddleware 函数
exports.default = chatController;
