import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { firstValueFrom } from 'rxjs';
import { APIResponse } from "src/models/api.response";

export class APIService{
    constructor(private readonly _httpClient: HttpClient){}

    protected async post<T>(url: string, body: object) : Promise<APIResponse<T>>{
        try{
            const observable = this._httpClient.post<T>(`http://localhost:5000/${url}`, body);
            const responseBody = await firstValueFrom(observable);
            return new APIResponse<T>(true, responseBody);
        } catch (e: any){
            return APIResponse.failure(e.error.status as number, e.error);
        }
    }

    protected async get<T>(url: string): Promise<APIResponse<T>>{
        try{
            const observable = this._httpClient.get<T>(`http://localhost:5000/${url}`);
            const responseBody = await firstValueFrom(observable);
            return new APIResponse<T>(true, responseBody);
        } catch (e: any){
            return APIResponse.failure(e.error.status as number, e.error);
        }
    }
}
