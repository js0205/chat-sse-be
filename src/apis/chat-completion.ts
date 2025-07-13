import { deepseekReuqest } from '@/utils/request';

interface IChatCompletionItem {
  id: string;
  choices: object[];
  created: number;
  model: string;
  ststem_fingerprint: string;
  object: string;
}

interface IChatCompletionChunk {
  data: IChatCompletionItem[];
}
const chatCompletion = async (): Promise<IChatCompletionChunk> => {
  return new Promise((resolve, reject) => {
    deepseekReuqest({
      method: 'POST',
      url: 'chat/completions'
    })
      .then((res: any) => {
        resolve(res.data as IChatCompletionChunk);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

export { chatCompletion };
export type { IChatCompletionChunk };
