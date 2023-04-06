import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { filter, Subject, take, takeUntil } from 'rxjs';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/dto/user';
import jwt_decode from 'jwt-decode';
import { LogedUser } from 'src/app/dto/loged-user';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { PlayerService } from 'src/app/player/player.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginValid = true;
  public username = '';
  public password = '';
  accountId:string='';
  formdata: any;
  profile:any;
  showModal:boolean=false;

  @Input() user: User={
    status:'',
    message:'',
    Authorization:''
  };

  @Input() logedUser: LogedUser={
    exp:'',
    iat:'',
    sub:''

  };
  private _destroySub$ = new Subject<void>();
  private readonly returnUrl: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService,
    private cookieService: CookieService,
    private _toastr:ToastrService,
    private playerService:PlayerService
  ) {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/game';
  }

  public ngOnInit(): void {
    this.formdata = new FormGroup({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.min(1)
        //  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.min(1)
      ]))
    });


  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
  }

  hide = true;
  // get emailInput() { return this.formdata.get('email'); }
  // get passwordInput() { return this.formdata.get('password'); } 

  public onSubmit(loginDto: any) {
    this.showModal=true
    this.loginValid = true;
    this.username=loginDto.email
    this._authService.login(loginDto).pipe(
      take(1)
    ).subscribe(
      (response) => {
        this.user=response;
        this.logedUser=this.getDecodedAccessToken(this.user.Authorization)
        console.log(this.logedUser.exp)
        this.cookieService.set( 'accountId', this.logedUser.sub+"");
        this.cookieService.set( 'email', this.username);
        this.loginValid = true;
        this.cookieService.set('isLogged',"true");
        this.hasProdile()
      },
      (error) => {
        this.cookieService.set( 'isLogged',"false");
        this.loginValid =false;
        this.showModal=false
        this._toastr.error("email and password not recognized. try again","Failed");
      }

    );
  }

  hasProdile(){
    this.accountId = this.cookieService.get('accountId');
    this.playerService.getMineProfile(this.accountId).subscribe(
      (response)=>{
        this.profile=response
        if(this.profile.achiever_pct===null || this.profile.explorer_pct===null || this.profile.killer_pct===null || this.profile.socializer_pct===null){
          this.showModal=false
          this._router.navigateByUrl('/battle-test');
        }else{
          this.showModal=false
          this._router.navigateByUrl('/player');
        }
        this.showModal=false
      },
      (error)=>{
        this.showModal=false
        this._router.navigateByUrl('/create-update-profile');
      }
    );
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}

