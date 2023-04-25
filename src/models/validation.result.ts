export class ValidationResult{
    constructor(public readonly errors: {[key: string]: string}){}

    public get isValid(): boolean{
        return Object.keys(this.errors).length == 0;
    }
}