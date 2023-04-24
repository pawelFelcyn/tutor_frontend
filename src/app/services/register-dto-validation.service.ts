import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { RegisterDto } from 'src/dtos/register.dto';
import { ValidationResult } from 'src/models/validation.result';
import { Validator } from './validator';

@Injectable({
  providedIn: 'root',
})
export class RegisterDtoValidationService extends Validator {
  constructor() {
    super();
  }

  public validate(model: RegisterDto): ValidationResult {
    const errors: {[key: string]: string} = {};
    this.appendError(this.validateFirstName(model.firstName), "firstName", errors);
    this.appendError(this.validateLastName(model.lastName), "lastName", errors);
    this.appendError(this.validateRole(model.role), "role", errors);
    this.appendError(this.validateEmail(model.email), "email", errors);
    this.appendError(this.validatePassword(model.password), "password", errors);
    this.appendError(this.validateConfirmPassword(model.confirmPassword, model.password), "confirmPassword", errors);
    this.appendError(this.validateTutorDescription(model.tutorDescription, model.role), "tutorDescription", errors);

    return new ValidationResult(errors);
  }

  private validateFirstName(firstName: string | null): string | null {
    if (firstName === '' || firstName == null) {
      return 'First name must not be empty.';
    }

    if (firstName.length > 50) {
      return 'Maximum length of first name is 50 characters';
    }

    return null;
  }

  private validateLastName(lastName: string | null): string | null {
    if (lastName === '' || lastName == null) {
      return 'Last name must not be empty.';
    }

    if (lastName.length > 50) {
      return 'Maximum length of last name is 50 characters';
    }

    return null;
  }

  private validateRole(role: string | null): string | null {
    if (role !== 'User' && role !== 'Tutor') {
      return 'Role must be in [User, Tutor]';
    }

    return null;
  }

  private validateEmail(email: string | null): string | null {
    if (email === '' || email == null) {
      return 'Email must not be empty';
    }

    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (!emailRegex.test(email)) {
      return 'This is not a valid email address';
    }

    return null;
  }

  private validatePassword(password: string | null): string | null {
    if (password === '' || password == null) {
      return 'Password must not be empty';
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit and one special character.';
    }

    return null;
  }

  private validateConfirmPassword(confirmPassword: string | null, password: string | null): string | null{
    return confirmPassword === password ? null : "Confirm password must be same as password";
  }

  private validateTutorDescription(description: string | null, role: string | null): string | null{
    if (role != "Tutor"){
      return description === '' || description == null ? null : "You must be in role 'Tutor' to fill this fieled";
    }

    if (description == '' || description == null){
      return "Description must not be empty";
    }

    if (description.length > 500){
      return "Maximum length of description is 500 characters";
    }

    return null;
  }
}
