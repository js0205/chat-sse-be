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
declare const chatCompletion: () => Promise<IChatCompletionChunk>;
export { chatCompletion };
export type { IChatCompletionChunk };
