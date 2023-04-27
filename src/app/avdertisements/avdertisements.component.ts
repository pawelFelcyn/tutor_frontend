import { Component, OnInit } from '@angular/core';
import { AdvertisementDto } from 'src/dtos/advertisement.dto';
import { AdvertisementsService } from '../services/advertisements.service';
import { PagedResult } from 'src/dtos/paged.result';

@Component({
  selector: 'app-avdertisements',
  templateUrl: './avdertisements.component.html',
  styleUrls: ['./avdertisements.component.css']
})
export class AvdertisementsComponent implements OnInit {

  page: PagedResult<AdvertisementDto> | null = null;

  constructor(private readonly _advertisementsService: AdvertisementsService) {
  }

  ngOnInit(): void {
  }

  public async loadAdvertisements(): Promise<void>{
    this.page = null;
    var result = await this._advertisementsService.getAll();
    
    if (!result.success){
      //here we handle errors
      return;
    }

    this.page = result.contentDeserialized as PagedResult<AdvertisementDto>;
  } 
}
