import { Component, OnInit } from '@angular/core';
import { RegisterDto } from 'src/dtos/register.dto';
import { RegisterDtoValidationService } from '../services/register-dto-validation.service';
import { ValidationResult } from 'src/models/validation.result';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerDto: RegisterDto = new RegisterDto();
  firstNameErrors: string | null = null;
  lastNameErrors: string | null = null;
  roleErrors: string | null = null;
  emailErrors: string | null = null;
  passwordErrors: string | null = null;
  confirmPasswordErrors: string | null = null;
  tutorDescriptionErrors: string | null = null;

  constructor(private readonly _validator: RegisterDtoValidationService,
    private readonly _registerService: RegisterService,
    private readonly _router: Router) { }

  ngOnInit(): void {
  }

  public async submit(): Promise<void>{
    this.clearValidationErrors();

    if (this.registerDto.password === '' && this.registerDto.confirmPassword == null){
      this.registerDto.password = null;
    } else if (this.registerDto.password == null && this.registerDto.confirmPassword === ''){
      this.registerDto.confirmPassword = null;
    }

    const descToRestore = this.registerDto.tutorDescription;

    if (this.registerDto.role === 'User'){
      this.registerDto.tutorDescription = null;
    }

    const validationResult = this._validator.validate(this.registerDto);
    if (!validationResult.isValid){
      this.registerDto.tutorDescription = descToRestore;
      this.handleValidationErrors(validationResult);
      return;
    }

    const response = await this._registerService.register(this.registerDto);
    if (response.success){
      this._router.navigate(["/advertisements"]);
    }
  }
  
  private clearValidationErrors(): void{
    this.firstNameErrors = null;
    this.lastNameErrors = null;
    this.roleErrors = null;
    this.emailErrors = null;
    this.passwordErrors = null;
    this.confirmPasswordErrors = null;
    this.tutorDescriptionErrors = null;
  }

  private handleValidationErrors(validationResult: ValidationResult): void{
    this.firstNameErrors = validationResult.errors['firstName'];
    this.lastNameErrors = validationResult.errors['lastName'];
    this.roleErrors = validationResult.errors['role'];
    this.emailErrors = validationResult.errors['email'];
    this.passwordErrors = validationResult.errors['password'];
    this.confirmPasswordErrors = validationResult.errors['confirmPassword'];
    this.tutorDescriptionErrors = validationResult.errors['tutorDescription'];
  }
}
