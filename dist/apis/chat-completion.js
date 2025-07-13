"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatCompletion = void 0;
const request_1 = require("@/utils/request");
const chatCompletion = async () => {
    return new Promise((resolve, reject) => {
        (0, request_1.deepseekReuqest)({
            method: 'POST',
            url: 'chat/completions'
        })
            .then((res) => {
            resolve(res.data);
        })
            .catch((err) => {
            reject(err);
        });
    });
};
exports.chatCompletion = chatCompletion;
