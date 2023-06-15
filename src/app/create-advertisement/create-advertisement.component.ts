import { Component, OnInit } from '@angular/core';
import { LoggedUserContextService } from '../services/logged-user-context.service';
import { CreateAdvertisementDto } from 'src/dtos/create.advertisement.dto';
import { EducationLevels } from 'src/dtos/advertisement.details.dto';
import { CreateAdvertisementDtoValidationService } from '../services/create-advertisement-dto-validation.service';
import { SubjectsService } from '../services/subjects.service';
import { SubjectDto } from 'src/dtos/subject.dto';
import { ValidationResult } from 'src/models/validation.result';
import { AdvertisementsService } from '../services/advertisements.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent implements OnInit {
  advertisement: CreateAdvertisementDto = new CreateAdvertisementDto();
  public readonly allEducationLevels: [string, string | EducationLevels][];
  subjectList: SubjectDto[] = [];
  titleError: string | null = null;
  descriptionError: string | null = null;
  subjectError: string | null = null;
  priceError: string | null = null;

  public get selectedSubject(): string{
    return this.advertisement.subjectId;
  }

  public set selectedSubject(id: string){
    this.advertisement.subjectId = id;
  }


  constructor(public readonly loggedUserContextService: LoggedUserContextService,
    private readonly _validator: CreateAdvertisementDtoValidationService,
    private readonly _subjectsService: SubjectsService,
    private readonly _advertisementsService: AdvertisementsService,
    private readonly _router: Router) { 
    const levels = Object.entries(EducationLevels);
    this.allEducationLevels = levels.slice(Math.ceil(levels.length / 2));
  }

  async ngOnInit(): Promise<void> {
    this.subjectList.length = 0;
    const response = await this._subjectsService.getAll();

    if (!response.success || response.contentDeserialized == undefined){
      return;
    }

    response.contentDeserialized.forEach(element => {
      this.subjectList.push(element);
    });
  }

  public async submitForm(): Promise<void>{
    console.log(this.advertisement);
    this.clearErrors();
    const validationResult = this._validator.validate(this.advertisement);

    if (!validationResult.isValid){
      this.handleValidationErrors(validationResult);
      return;
    }

    var apiResponse = await this._advertisementsService.create(this.advertisement);

    if (!apiResponse.success){
      alert("Couldn't create advertisement");
    }

    const queryParams  = {
      id: apiResponse.contentDeserialized?.id
    }
    const navigationExtras: NavigationExtras = {
      queryParams
    };
    this._router.navigate([`/advertisements/details`], navigationExtras);
  }

  private clearErrors(): void{
    this.titleError = null;
    this.descriptionError = null;
    this.subjectError = null;
    this.priceError = null;
  }

  private handleValidationErrors(result: ValidationResult): void{
    this.titleError = result.errors['title'];
    this.descriptionError = result.errors['description'];
    this.subjectError = result.errors['subjectId'];
    this.priceError = result.errors['pricePerHour'];
  }

}
