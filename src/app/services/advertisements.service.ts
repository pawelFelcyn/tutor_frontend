import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { AdvertisementDto } from 'src/dtos/advertisement.dto';
import { PagedResult } from 'src/dtos/paged.result';
import { APIResponse } from 'src/models/api.response';
import { AdvertisementFilterDto } from 'src/dtos/filter.dto';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementsService extends APIService{

  constructor(httpClient: HttpClient) {
    super(httpClient)
  }

  public async getAll(filter: AdvertisementFilterDto): Promise<APIResponse<PagedResult<AdvertisementDto>>>{
    const params = filter.getParams();
    return await this.get<PagedResult<AdvertisementDto>>(`api/advertisements`, params);
  }
}
