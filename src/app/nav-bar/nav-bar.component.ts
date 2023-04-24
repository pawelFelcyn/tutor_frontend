import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from 'src/dtos/login.dto';
import { AppCookieService } from '../services/app-cookie.service';
import { LoginService } from '../services/login.service';
import { LoggedUserContextService } from '../services/logged-user-context.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isUserSignedIn: boolean = false;

  constructor(private readonly router: Router,
    private readonly _cookieService: AppCookieService,
    private readonly _loggedUserContextService: LoggedUserContextService) { 
      this.listenLoginStatusChanges();
    }

  private listenLoginStatusChanges(): void{
    this._loggedUserContextService.statusChangedEventEmmiter.subscribe(status =>{
      this.isUserSignedIn = status != null;
    });
  }

  ngOnInit(): void {
    this.isUserSignedIn = this._cookieService.get("token") != null;
  }
  

  public navigateTo(path: string): void{
    this.router.navigate([path]);
  }

  public signOut(): void{
    this._loggedUserContextService.deleteData();
  }
}
