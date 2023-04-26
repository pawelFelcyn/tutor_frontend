import { Component, OnInit } from '@angular/core';
import { AdvertisementDto } from 'src/dtos/advertisement.dto';
import { AdvertisementsService } from '../services/advertisements.service';

@Component({
  selector: 'app-avdertisements',
  templateUrl: './avdertisements.component.html',
  styleUrls: ['./avdertisements.component.css']
})
export class AvdertisementsComponent implements OnInit {

  advertisements: AdvertisementDto[] = [];

  constructor(private readonly _advertisementsService: AdvertisementsService) {
  }

  ngOnInit(): void {
  }

  public async loadAdvertisements(): Promise<void>{
    this.advertisements.length = 0;
    var result = await this._advertisementsService.getAll();
    
    if (!result.success){
      //here we handle errors
      return;
    }

    result.contentDeserialized?.items.forEach(i =>{
      this.advertisements.push(i);
    });
  } 
}
