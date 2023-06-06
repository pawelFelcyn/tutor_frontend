import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { SubjectDto } from 'src/dtos/subject.dto';
import { APIResponse } from 'src/models/api.response';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService extends APIService {

  constructor(client: HttpClient) {
    super(client);
  }

  public async getAll(): Promise<APIResponse<SubjectDto[]>>{
    return await this.get<SubjectDto[]>('api/subjects');
  }
}
