import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from 'src/dtos/login.dto';
import { AppCookieService } from '../services/app-cookie.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isUserSignedIn: boolean = false;

  constructor(private readonly router: Router,
    private readonly _cookieService: AppCookieService) { }

  ngOnInit(): void {
    this.isUserSignedIn = this._cookieService.get("token") != null;
  }
  

  public navigateTo(path: string): void{
    this.router.navigate([path]);
  }
}
