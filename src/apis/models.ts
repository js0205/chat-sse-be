import { deepseekReuqest } from '@/utils/request';

interface IModel {
  id: string;
  object: string;
  created?: number;
  owned_by?: string;
}

interface IModelsResponse {
  data: IModel[];
  object: string;
}

const getDeepSeekModels = async (): Promise<IModelsResponse> => {
  return new Promise((resolve, reject) => {
    deepseekReuqest({
      method: 'GET',
      url: '/models'
    })
      .then((res: any) => {
        resolve(res.data as IModelsResponse);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

export { getDeepSeekModels };
export type { IModel, IModelsResponse }; 