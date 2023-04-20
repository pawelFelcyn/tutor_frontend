export class APIResponse<T>{
    public constructor(public readonly success: boolean,
        public readonly contentDeserialized?: T){}

    public static failure<TParam>() : APIResponse<TParam>{
        return new APIResponse<TParam>(false);
    }
}