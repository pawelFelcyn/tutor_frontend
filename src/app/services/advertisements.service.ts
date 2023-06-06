import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { AdvertisementDto } from 'src/dtos/advertisement.dto';
import { PagedResult } from 'src/dtos/paged.result';
import { APIResponse } from 'src/models/api.response';
import { AdvertisementFilterDto } from 'src/dtos/filter.dto';
import { AdvertisementDetailsDto } from 'src/dtos/advertisement.details.dto';

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

  public async getById(id: string): Promise<APIResponse<AdvertisementDetailsDto>>{
    return await this.get<AdvertisementDetailsDto>(`api/advertisements/${id}`);
  }
}
