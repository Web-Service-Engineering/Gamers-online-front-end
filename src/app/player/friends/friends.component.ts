import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  animalControl = new FormControl('', [Validators.required]);
  profiles:any=[];
  // animals = [
  //   {name: 'Dog', sound: 'Woof!'},
  //   {name: 'Cat', sound: 'Meow!'},
  //   {name: 'Cow', sound: 'Moo!'},
  //   {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  // ];

  constructor(private playerService:PlayerService){
    this.getProfiles();
  }
  test(){
    console.log("Ready");
    
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
}
