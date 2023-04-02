import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-battle-test',
  templateUrl: './battle-test.component.html',
  styleUrls: ['./battle-test.component.css']
})
export class BattleTestComponent {
  typeMap = new Map<string, string>();
  answer:string='';
  accountId:string='';
  result={
    account_id:'',
    responses:{}
  }
  items = [
    {
      question:"Which is more enjoyable to you?",
      answers:[{"letter":"S","description":"Killing a big monster"},{"letter":"A","description":"Bragging about it to your friend"}]
    },
    {
      question:"Which do you enjoy more in quests?",
      answers:[{"letter":"A","description":"Getting involved in the storyline"},{"letter":"S","description":"Getting the reward at the end"}]
    }
    ,
    {
      question:"Would you rather be:",
      answers:[{"letter":"S","description":"Popular?"},{"letter":"letter","description":"Wealthy?"}]
    },
    {
      question:"Which do you enjoy more in an online game?",
      answers:[{"letter":"A","description":"Getting the latest gossip"}, {"letter":"S","description":"Getting a new item"}]
    },
    {
      question:"Which would you rather have, as a player in an online game?",
      answers:[{"letter":"S","description":"A private channel, over which you and your friends can communicate"}, {"letter":"A","description":"Your own house, worth millions of gold coins"}]
    },
    // {
    //   question:"Which would you enjoy more as an online game player?",
    //   answers:['Running your own tavern?', 'Making your own maps of the world,then selling them.']
    // },
    // {
    //   question:"What's more important in an online game to you?",
    //   answers:['The number of people', 'The number of areas to explore']
    // },
    // {
    //   question:"What's more important to you?",
    //   answers:['The quality of roleplaying in an online game', 'The uniqueness of the features, and game mechanic']
    // },
    // {
    //   question:"You are being chased by a monster in an online game. Do you:",
    //   answers:['Get a big group of players to kill it', 'Try a varienty of wearpons and magic against it, until you find it weakness']
    // }
  ];

  constructor(private cookieService: CookieService, private playerService:PlayerService,    private toastr: ToastrService,private _router:Router){
    this.accountId=this.cookieService.get('accountId');
  }
  
  
  onChange(question:any,response:any){
      this.typeMap.set(question,response);
  }

  submit(){
  let arr4:any=[];
  this.typeMap.forEach((value: string, key: string) => {
      arr4.push(value);
  });
  this.result.account_id=this.accountId;
  this.result.responses=arr4;
  console.log(this.result);
  
  this.playerService.sendResult(this.result).subscribe(
    (response)=>{
        console.log("Response: "+response);
        this.toastr.success('Result submitted successfully', 'Succeded');
        this._router.navigateByUrl('/player');
    },
    (error)=>{
      console.log(error);
      this.toastr.error('Something went wrong, try again', 'Failed');
    }
  );
  }

}
