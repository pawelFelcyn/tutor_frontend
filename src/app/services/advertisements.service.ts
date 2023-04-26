import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { AdvertisementDto } from 'src/dtos/advertisement.dto';
import { PagedResult } from 'src/dtos/paged.result';
import { APIResponse } from 'src/models/api.response';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementsService extends APIService{

  constructor(httpClient: HttpClient) {
    super(httpClient)
  }

  public async getAll(): Promise<APIResponse<PagedResult<AdvertisementDto>>>{
    return await this.get<PagedResult<AdvertisementDto>>('api/advertisements');
  }
}
