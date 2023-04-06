import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiURL = "https://gamers-online-matching-kiraleroger-gmailcom.vercel.app/";

  constructor(private http:HttpClient) { }

  sendResult(result:any) {
	  return this.http.post(this.apiURL+"bartlequotient/",result);
  }

  getProfile(result:any) {
	  return this.http.get(this.apiURL+"bartlequotient",result);
  }
  //works fine
  getProfiles(){
    return this.http.get(this.apiURL+"profile");
  }

  getMineProfile(accountId:string){
    return this.http.get(this.apiURL+"profile/"+accountId);
  }

  update(player:any){
    return this.http.put(this.apiURL+"profile/",player);
  }

  createProfile(player:any){
    return this.http.post(this.apiURL+"profile/",player);
  }

  addFriend(friendRequest:any){
    return this.http.post(this.apiURL+"friends/",friendRequest);
  }
  removeFriend(fiendRemoveRequest:any){
    return this.http.delete(this.apiURL+"friends/",fiendRemoveRequest);
  }
}
