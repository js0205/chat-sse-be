"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("@/apis/models");
const modelController = async (ctx) => {
    ctx.type = 'application/json';
    try {
        ctx.body = await (0, models_1.getDeepSeekModels)();
    }
    catch (error) {
        ctx.status = 500;
        ctx.body = { error: 'Internal Server Error' };
        console.error(error);
    }
};
// 导出 authMiddleware 函数
exports.default = modelController;
