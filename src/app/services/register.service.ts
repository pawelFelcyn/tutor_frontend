import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { RegisterDto } from 'src/dtos/register.dto';
import { APIResponse } from 'src/models/api.response';
import { LoginResponseDto } from 'src/dtos/login.response.dto';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends APIService{

  constructor(client: HttpClient) {
    super(client);
   }

   public async register(dto: RegisterDto) : Promise<APIResponse<LoginResponseDto>>{
    return await this.post<LoginResponseDto>('api/authentication/register', dto);
   }
}
