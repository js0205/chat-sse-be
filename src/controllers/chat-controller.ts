//ts-ignore
import { chatCompletion } from '@/apis/chat-completion';
// 定义 authMiddleware 函数
const chatController = async (ctx: any) => {
  ctx.type = 'application/event-stream';
  try {
    ctx.body = await chatCompletion();
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
    console.error(error);
  }
};

// 导出 authMiddleware 函数
export default chatController;
