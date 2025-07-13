"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chat_controller_1 = __importDefault(require("@/controllers/chat-controller"));
const model_controller_1 = __importDefault(require("@/controllers/model-controller"));
const router_1 = __importDefault(require("@koa/router"));
const router = new router_1.default();
router.get('/models', model_controller_1.default);
router.post('/', chat_controller_1.default);
exports.default = router;
