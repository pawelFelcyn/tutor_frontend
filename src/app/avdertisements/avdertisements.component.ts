import { Component, OnInit } from '@angular/core';
import { AdvertisementDto } from 'src/dtos/advertisement.dto';
import { AdvertisementsService } from '../services/advertisements.service';
import { PagedResult } from 'src/dtos/paged.result';
import { AdvertisementFilterDto } from 'src/dtos/filter.dto';

@Component({
  selector: 'app-avdertisements',
  templateUrl: './avdertisements.component.html',
  styleUrls: ['./avdertisements.component.css']
})
export class AvdertisementsComponent implements OnInit {

  page: PagedResult<AdvertisementDto> | null = null;
  loadingAdvertisementsErrorOccured: boolean = false;

  constructor(private readonly _advertisementsService: AdvertisementsService) {
  }

  ngOnInit(): void {
  }

  public async loadAdvertisements(filter: AdvertisementFilterDto): Promise<void>{
    console.log(filter);
    this.page = null;
    var result = await this._advertisementsService.getAll(filter);
    
    if (!result.success){
      this.loadingAdvertisementsErrorOccured = true;
      return;
    }

    this.loadingAdvertisementsErrorOccured = false;
    this.page = result.contentDeserialized as PagedResult<AdvertisementDto>;
  } 


}
