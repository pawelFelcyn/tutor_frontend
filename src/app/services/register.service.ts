import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { RegisterDto } from 'src/dtos/register.dto';
import { APIResponse } from 'src/models/api.response';
import { LoginResponseDto } from 'src/dtos/login.response.dto';
import { LoggedUserContextService } from './logged-user-context.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends APIService{

  constructor(client: HttpClient, 
    private readonly _loggedUserContextService: LoggedUserContextService) {
    super(client);
   }

   public async register(dto: RegisterDto) : Promise<APIResponse<LoginResponseDto>>{
    const response = await this.post<LoginResponseDto>('api/authentication/register', dto);

    if (response.success && response.contentDeserialized != null){
      this._loggedUserContextService.setNewData(response.contentDeserialized);
    }

    return response;
   }
}
