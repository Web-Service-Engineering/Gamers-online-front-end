import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  states=['GA','CA','TE','FA']
  showModal:boolean=false;
  public userEmail:string='email';
  constructor(private cookieService:CookieService,private playerService:PlayerService, private toastr:ToastrService,private router:Router){
    this.userEmail=cookieService.get("email")
  }

  createProfile(data:any){
    this.showModal=true
    data.email=this.userEmail
    data.account_id=this.cookieService.get("accountId")
    data.id=this.cookieService.get("accountId");
    data.skillset_id="1";
    this.playerService.createProfile(data).subscribe(
      (response)=>{
        this.showModal=false
        this.router.navigateByUrl('/battle-test');
      },
      (error)=>{
        this.showModal=false
        this.toastr.error("Something went wrong. Try again.","Failed");
      }
    );
    
  }
}
