import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PlayerService } from './player.service';
import { CookieService } from 'ngx-cookie-service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent{
  showModal1: boolean=false;
  toolbarTitle='Gamers'
  menuItems = ['home','groups'];
  personalInfo:any;
  userEmail:string='email'
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    constructor(
      private breakpointObserver: BreakpointObserver,
      private router: Router,
      private playerService:PlayerService, 
      private cookieService:CookieService,
      private bottomSheet: MatBottomSheet,
      private toastr:ToastrService) {
      this.userEmail=cookieService.get("email")
      this.router.events.subscribe(
        (event: any) => {
          if (event instanceof NavigationEnd) {
            this.toolbarTitle =  this.router.url.replace('/','');
          }
        }
      );
    }


    logout(){
      this.cookieService.set("isLogged","false")
      this.router.navigateByUrl('/login');
    }


    openBottomSheet(): void {
      this.bottomSheet.open(BottomSheetOverviewExampleSheet);
    }

    hide(){
      this.showModal1=false
    }

    show(){
      this.showModal1=true
    }

    createProfile(data:any){
      data.email=this.userEmail
      data.account_id=Number(this.cookieService.get("accountId"));
      data.id=this.cookieService.get("accountId");
      data.skillset_id="1";
      this.playerService.update(data).subscribe(
        (response)=>{
          this.toastr.success("Profile successfully updated.","Success");
          this.showModal1=false
        },
        (error)=>{
          this.toastr.error("Something went wrong. Try again.","Failed");
        }
      );
      
    }
}

@Component({
  selector: 'app-player',
  templateUrl: './notifications.html',
  styleUrls: ['./player.component.css']
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  accept(){

  }


}
