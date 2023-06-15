import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { firstValueFrom } from 'rxjs';
import { APIResponse } from "src/models/api.response";
import { LoggedUserContextService } from "./logged-user-context.service";

export class APIService{
    constructor(private readonly _httpClient: HttpClient,
        protected readonly _loggedUserContextService: LoggedUserContextService | null = null){}

    protected async post<T>(url: string, body: object) : Promise<APIResponse<T>>{
        try{
            const headers = this.getHeaders();
            const observable = this._httpClient.post<T>(`http://localhost:5000/${url}`, body, {headers});
            const responseBody = await firstValueFrom(observable);
            return new APIResponse<T>(true, responseBody);
        } catch (e: any){
            return APIResponse.failure(e.error.status as number, e.error);
        }
    }

    private getHeaders(): HttpHeaders{
        let headers = new HttpHeaders();

        if (this._loggedUserContextService?.token){
            headers = headers.set('Authorization', `Bearer ${this._loggedUserContextService?.token}`)
        }

        return headers;
    }

    protected async get<T>(url: string, params: any = null): Promise<APIResponse<T>>{
        try{
            const observable = this._httpClient.get<T>(`http://localhost:5000/${url}`, {
                params: params
            });
            const responseBody = await firstValueFrom(observable);
            return new APIResponse<T>(true, responseBody);
        } catch (e: any){
            return APIResponse.failure(e.error.status as number, e.error);
        }
    }
}
