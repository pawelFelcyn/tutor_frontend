import { Component, OnInit } from '@angular/core';
import { RegisterDto } from 'src/dtos/register.dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerDto: RegisterDto = {};

  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void{
    console.log(this.registerDto);
  }
}
