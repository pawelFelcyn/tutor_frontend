import { Injectable } from '@angular/core';
import { Validator } from './validator';
import { CreateAdvertisementDto } from 'src/dtos/create.advertisement.dto';
import { ValidationResult } from 'src/models/validation.result';

@Injectable({
  providedIn: 'root'
})
export class CreateAdvertisementDtoValidationService extends Validator{

  constructor() { 
    super();
  }

  public validate(dto: CreateAdvertisementDto) : ValidationResult{
    const errors: {[key: string]: string} = {};
    this.appendError(this.validateTitle(dto.title), "title", errors);
    this.appendError(this.validateDescription(dto.description), "description", errors);
    this.appendError(this.validateSubjectId(dto.title), "subjectId", errors);
    this.appendError(this.validatePrice(dto.pricePerHour), "pricePerHour", errors);
    return new ValidationResult(errors);
  }

  private validateTitle(title: string | null): string | null{
    if (title == null || title == ''){
      return "Title must not be empty";
    }

    if (title.length > 100){
      return "Max length of the title is 100 characters";
    }

    return null;
  }

  private validateDescription(description: string | null){
    if (description != null && description.length > 1000){
      return "Max length of the title is 1000 characters";
    }

    return null;
  }

  private validateSubjectId(subjectId: string | null){
    const regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    if (!subjectId || !regex.test(subjectId)){
      return "Subject must not be empty";
    }

    return null;
  }

  private validatePrice(price: number){
    if (price <= 0){
      return "Price must be greather than 0";
    }

    return null;
  }
}
