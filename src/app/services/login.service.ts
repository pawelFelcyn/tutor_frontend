import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { LoginDto } from 'src/dtos/login.dto';
import { APIService } from './api.service';
import { APIResponse } from 'src/models/api.response';
import { LoginResponseDto } from 'src/dtos/login.response.dto';
import { AppCookieService } from './app-cookie.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends APIService{

  statusChangedEventEmmiter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(httpClient: HttpClient,
    private readonly cookieServise: AppCookieService)
  { 
    super(httpClient);
  }

  public async login(dto: LoginDto): Promise<APIResponse<LoginResponseDto>>{
    const response = await this.post<LoginResponseDto>("api/authentication/login", dto);

    if (response.success){
      this.cookieServise.set("token", (response.contentDeserialized as LoginResponseDto).token)
      this.statusChangedEventEmmiter.emit(true);
    }

    return response;
  }

  public signOut(): void{
    this.cookieServise.remove("token");
    this.statusChangedEventEmmiter.emit(false);
  }
}