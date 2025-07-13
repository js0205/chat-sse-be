import { getDeepSeekModels } from '@/apis/models';
const modelController = async (ctx: any) => {
  ctx.type = 'application/json';
  try {
    ctx.body = await getDeepSeekModels();
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
    console.error(error);
  }
};

// 导出 authMiddleware 函数
export default modelController;
