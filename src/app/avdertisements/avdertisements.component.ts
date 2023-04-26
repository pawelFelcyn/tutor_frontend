import { Component, OnInit } from '@angular/core';
import { AdvertisementDto } from 'src/dtos/advertisement.dto';

@Component({
  selector: 'app-avdertisements',
  templateUrl: './avdertisements.component.html',
  styleUrls: ['./avdertisements.component.css']
})
export class AvdertisementsComponent implements OnInit {

  advertisements: AdvertisementDto[] = [];

  constructor() {
    this.seedAdvertisements();
  }

  private seedAdvertisements(): void{
    this.advertisements.push({
      id: "1",
      title: 'first title',
      creationDate: new Date(),
      lastModificationDate: new Date(),
      pricePerHour: 10
    });
    this.advertisements.push({
      id: "2",
      title: 'second title',
      creationDate: new Date(),
      lastModificationDate: new Date(),
      pricePerHour: 10
    });
    this.advertisements.push({
      id: "3",
      title: 'third title',
      creationDate: new Date(),
      lastModificationDate: new Date(),
      pricePerHour: 10
    });
    this.advertisements.push({
      id: "4",
      title: 'fourth title',
      creationDate: new Date(),
      lastModificationDate: new Date(),
      pricePerHour: 10
    });
    this.advertisements.push({
      id: "5",
      title: 'fifth title',
      creationDate: new Date(),
      lastModificationDate: new Date(),
      pricePerHour: 10
    });
    this.advertisements.push({
      id: "1",
      title: 'first title',
      creationDate: new Date(),
      lastModificationDate: new Date(),
      pricePerHour: 10
    });
    this.advertisements.push({
      id: "2",
      title: 'second title',
      creationDate: new Date(),
      lastModificationDate: new Date(),
      pricePerHour: 10
    });
    this.advertisements.push({
      id: "3",
      title: 'third title',
      creationDate: new Date(),
      lastModificationDate: new Date(),
      pricePerHour: 10
    });
    this.advertisements.push({
      id: "4",
      title: 'fourth title',
      creationDate: new Date(),
      lastModificationDate: new Date(),
      pricePerHour: 10
    });
    this.advertisements.push({
      id: "5",
      title: 'fifth title',
      creationDate: new Date(),
      lastModificationDate: new Date(),
      pricePerHour: 10
    });
  }

  ngOnInit(): void {
  }

}
