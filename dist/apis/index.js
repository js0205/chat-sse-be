"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeepSeekModels = exports.chatCompletion = void 0;
var chat_completion_1 = require("./chat-completion");
Object.defineProperty(exports, "chatCompletion", { enumerable: true, get: function () { return chat_completion_1.chatCompletion; } });
var models_1 = require("./models");
Object.defineProperty(exports, "getDeepSeekModels", { enumerable: true, get: function () { return models_1.getDeepSeekModels; } });
