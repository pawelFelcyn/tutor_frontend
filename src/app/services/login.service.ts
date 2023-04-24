import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { LoginDto } from 'src/dtos/login.dto';
import { APIService } from './api.service';
import { APIResponse } from 'src/models/api.response';
import { LoginResponseDto } from 'src/dtos/login.response.dto';
import { AppCookieService } from './app-cookie.service';
import { LoggedUserContextService } from './logged-user-context.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends APIService{


  constructor(httpClient: HttpClient,
    private readonly _loggedUserContextService: LoggedUserContextService)
  { 
    super(httpClient);
  }

  public async login(dto: LoginDto): Promise<APIResponse<LoginResponseDto>>{
    const response = await this.post<LoginResponseDto>("api/authentication/login", dto);

    if (response.success){
      this._loggedUserContextService.setNewData(response.contentDeserialized as LoginResponseDto);
    }

    return response;
  }
}
