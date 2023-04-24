export class Validator{
    protected appendError(error: string | null, name: string, errorsDict: {[key: string]: string}){
        if (error != null && error != ''){
            errorsDict[name] = error;
        }
    }
}