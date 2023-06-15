import { Component, OnInit } from '@angular/core';
import { LoggedUserContextService } from '../services/logged-user-context.service';
import { CreateAdvertisementDto } from 'src/dtos/create.advertisement.dto';
import { EducationLevels } from 'src/dtos/advertisement.details.dto';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent implements OnInit {
  advertisement: CreateAdvertisementDto = new CreateAdvertisementDto();
  public readonly allEducationLevels: [string, string | EducationLevels][];

  subjectList: any[] = [
    { id: '1', name: 'Subject 1' },
    { id: '2', name: 'Subject 2' },
    { id: '3', name: 'Subject 3' }
  ];


  constructor(public readonly loggedUserContextService: LoggedUserContextService) { 
    const levels = Object.entries(EducationLevels);
    this.allEducationLevels = levels.slice(Math.ceil(levels.length / 2));
  }

  ngOnInit(): void {
  }

  public submitForm(): void{
    console.log(this.advertisement);
  }

  isAtLeastOneLevelSelected(): boolean {
    return Object.values(this.advertisement.levels).some(level => level);
  }

}
