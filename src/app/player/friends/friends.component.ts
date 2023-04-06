import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PlayerService } from '../player.service';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit{
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  selectedFriendId:string='';
  animalControl = new FormControl('', [Validators.required]);
  profiles:any=[];

  constructor(private playerService:PlayerService,private cookie:CookieService,private toastr:ToastrService){
    this.getProfiles();
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  
  addFriend(){
    var fr={
      current_account_id:Number(this.cookie.get("accountId")),
      friend_account_id:Number(this.selectedFriendId)
    };
    console.log(fr);
    this.playerService.addFriend(fr).subscribe(
      (response)=>{
        this.ngOnInit()
        this.toastr.success("friend request sent")
    },
    (error)=>{
      this.toastr.error("failed, try again later")
    });
    
  }

  removeFriend(){
    var fr={
      current_account_id:Number(this.cookie.get("accountId")),
      friend_account_id:Number(this.selectedFriendId)
    };
    console.log(fr);
    
    this.playerService.removeFriend(fr).subscribe(
      (response)=>{
        this.ngOnInit()
        this.toastr.success("friend removed successfully")
    },
    (error)=>{
      this.toastr.error("failed, try again later")
    });
  }

  getProfiles(){
    this.playerService.getProfiles().subscribe(
      (response)=>{
        this.profiles=response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  selectedFriend(profile:any){
    console.log(profile);
    
  }
}
