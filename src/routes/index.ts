import chatController from '@/controllers/chat-controller';
import modelController from '@/controllers/model-controller';
import Router from '@koa/router';

const router = new Router();
router.get('/models', modelController);
router.post('/', chatController);

export default router;
