import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit{
  accountId: string = '';
  personalInfo:any;
  hasProfile:boolean=false;
  registerForm?: FormGroup;
  showModal1: boolean=false;
  constructor(private cookieService: CookieService, private playerService: PlayerService) {
    //this.show()
    this.accountId = this.cookieService.get('accountId');
    this.playerService.getMineProfile(this.accountId).subscribe(
      (response)=>{
        this.hasProfile=true
        this.personalInfo=response;
       
        // this.cookieService.set("fullName",this.personalInfo.first_name+" "+this.personalInfo.last_name);
      },
      (error)=>{
        this.hasProfile=false
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    
  }

  getAll(){
    let player:any={
      "account_id": 1,
      "first_name": "James",
      "last_name": "Sprat",
      "friendly_name": "Jack",
      "city": "Decatur",
      "state": "GA",
      "date_of_birth": "1994-01-01",
      "skillset_id": "1",
      "gender": "Male",
      "achiever_pct": "0.0",
      "explorer_pct": "0.0",
      "killer_pct": "0.0",
      "socializer_pct": "0.0",
      "id": "1"
  };
    this.playerService.update(player).subscribe(
      (response) => {
        console.log("Response: " + response);
        //console.log(Object.prototype.toString.call(response));
      },
      (error) => {
        console.log("Error " + error);
      }
    );
  }

 

}

