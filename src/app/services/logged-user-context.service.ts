import { EventEmitter, Injectable } from '@angular/core';
import { AppCookieService } from './app-cookie.service';
import { UserDetailsDto } from 'src/dtos/user.details.dto';
import { LoginResponseDto } from 'src/dtos/login.response.dto';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserContextService {
  
  private _token: string | null = null;
  private _loggedUserDetails: UserDetailsDto | null = null;
  statusChangedEventEmmiter: EventEmitter<UserDetailsDto | null> = new EventEmitter<UserDetailsDto | null>();


  constructor(private readonly cookieService: AppCookieService){
    this.initData()
   }

   private initData(): void{
    this.token = this.cookieService.get('token');
    const userJson = this.cookieService.get('userDetails');
    if (userJson != null){
      this.loggedUserDetails = JSON.parse(userJson);
    }
   }

   public get token(): string | null{
    return this._token;
   }

   private set token(value: string | null){
    this._token = value;
   }

   public get loggedUserDetails(): UserDetailsDto | null{
    return this._loggedUserDetails;
   }

   private set loggedUserDetails(value: UserDetailsDto | null){
    this._loggedUserDetails = value;
    this.statusChangedEventEmmiter.emit(value);
   }

   public setNewData(data: LoginResponseDto | null): void{
    if (data == null){
      this.deleteData();
      return;
    }

    this.cookieService.set('token', data.token);
    const detailsJson = JSON.stringify(data.user);
    this.cookieService.set('userDetails', detailsJson);
    this.token = data.token;
    this.loggedUserDetails = data.user;
   }

   public deleteData(): void{
    this.cookieService.remove('token');
    this.cookieService.remove('userDetails');
    this.token = null;
    this.loggedUserDetails = null;
   }

   public canCreateAdvertisement(): boolean{
    if (this.loggedUserDetails == null){
      return false;
    }

    return this.loggedUserDetails.role == 'Tutor';
   }
}
