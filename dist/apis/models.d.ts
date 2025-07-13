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
declare const getDeepSeekModels: () => Promise<IModelsResponse>;
export { getDeepSeekModels };
export type { IModel, IModelsResponse };
