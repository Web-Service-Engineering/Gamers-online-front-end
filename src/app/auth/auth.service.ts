import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = "http://127.0.0.1:5000/";

  constructor(private http: HttpClient,private cookieService:CookieService) { }

  public isLoggedIn = false;
  isAuthenticated() {
    this.isLoggedIn=Boolean(JSON.parse(this.cookieService.get("isLogged")));;
    return this.isLoggedIn;
  }

  register(player: any) {
    return this.http.post(this.apiURL + "account/", player);
  }

  login(loginDto: any) {
    return this.http.post(this.apiURL + "authenticate/login", loginDto);
  }


}
