export class APIResponse<T>{
    public constructor(public readonly success: boolean,
        public readonly contentDeserialized?: T,
        public readonly statusCode?: number,
        public readonly error?: any){}

    public static failure<TParam>(statusCode: number, error: any) : APIResponse<TParam>{
        return new APIResponse<TParam>(false, undefined, statusCode, error);
    }
}