import { Component, OnInit } from '@angular/core';
import { LoginDto } from 'src/dtos/login.dto';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDto: LoginDto = new LoginDto();
  passwordErrors: string = '';
  emailErrors: string = '';


  constructor(private readonly _service: LoginService,
    private readonly _router: Router) { }

  ngOnInit(): void {
  }
  
  public async signIn(): Promise<void>{
    if (!this.validateDto()){
      return;
    }

    var response = await this._service.login(this.loginDto);

    if(response.success){
      // this._router.navigate(["/home"]);
      return;
    }

    this.passwordErrors = "Invalid email or password";
    this.emailErrors = "Invalid email or password";
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
