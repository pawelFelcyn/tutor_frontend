import { Component, OnInit } from '@angular/core';
import { LoginDto } from 'src/dtos/login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDto: LoginDto = new LoginDto();
  passwordErrors: string = '';
  emailErrors: string = '';


  constructor() { }

  ngOnInit(): void {
  }
  
  public signIn(): void{
    if (!this.validateDto()){
      return;
    }
  }

  private validateDto() : boolean{
    this.emailErrors = '';
    this.passwordErrors = '';

    this.validateEmail();
    this.validatePassword();
    return this.passwordErrors === '' && this.emailErrors === '';
  }

  private validateEmail() : void{
    if (this.loginDto.email === ''){
      this.emailErrors = 'Email must not be empty';
      return;
    }
  }

  private validatePassword() : void{
    if (this.loginDto.password === ''){
      this.passwordErrors = 'Password must not be empty';
    }
  }
}
