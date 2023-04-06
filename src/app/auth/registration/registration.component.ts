import { Component, OnDestroy, OnInit , ViewChild, TemplateRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { filter, Subject, take, takeUntil } from 'rxjs';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public loginValid = true;
  public firstName = '';
  public lastName = '';
  public email = '';
  public password = '';
  public retypePassword = '';
  showModal:boolean=false

  formdata:any;

  private _destroySub$ = new Subject<void>();
  private readonly returnUrl: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService,
    private dialog: MatDialog,
    private toastr: ToastrService
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
      ])),
      password1: new FormControl("", Validators.compose([
        Validators.required,
        Validators.min(1)
      ]))
   });
  }



  onClickSubmit(data:any) {
    this.showModal=true
    const dataa={
      email:data.email,
      password:data.password
    }
    console.log(dataa);
    if(dataa.email!="" && dataa.password!=""){
      this._authService.register(dataa)
      .subscribe(
        (response) => {
          this.showModal=false
          this.toastr.success('login to proceed', 'Registered Successdully');
        },
        error => {
          this.showModal=false
         this.toastr.error('Something went wrong. Please try again', 'Failed');
        });
    }else{
      this.showModal=false
      this.toastr.error('Fillout the form first', 'Failed');
    }
  }


}
