"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeepSeekModels = void 0;
const request_1 = require("@/utils/request");
const getDeepSeekModels = async () => {
    return new Promise((resolve, reject) => {
        (0, request_1.deepseekReuqest)({
            method: 'GET',
            url: '/models'
        })
            .then((res) => {
            resolve(res.data);
        })
            .catch((err) => {
            reject(err);
        });
    });
};
exports.getDeepSeekModels = getDeepSeekModels;
