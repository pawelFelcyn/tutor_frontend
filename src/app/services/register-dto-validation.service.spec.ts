import { TestBed } from '@angular/core/testing';
import { RegisterDtoValidationService } from './register-dto-validation.service';
import { RegisterDto } from 'src/dtos/register.dto';

const getValidModel: () => RegisterDto = () =>{
    const model = new RegisterDto();
    model.firstName = 'John';
    model.lastName = 'Watson';
    model.role = 'User';
    model.email = 'email@email.com';
    model.password = '!Password123';
    model.confirmPassword = '!Password123';
    return model;
}

describe('ValidationService', () => {
    let validationService: RegisterDtoValidationService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [RegisterDtoValidationService]
      });
      validationService = TestBed.inject(RegisterDtoValidationService);
    });

    it('should return success validation result for a valid model', () => {
        const model = getValidModel();
        const validationResult = validationService.validate(model);
        expect(validationResult.isValid).toBe(true);
    });

    it('should return proper validation result for invalid email', () => {
        const model = getValidModel();
        model.email = 'invalid email';
        const validationResult = validationService.validate(model);
        const hasEmailError = validationResult.errors['email'] !== undefined;
        expect(hasEmailError).toBe(true);
    });
});