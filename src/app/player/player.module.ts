import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';
import { ProfileComponent } from './profile/profile.component';
import {MaterialModule} from '../material/material.module';
import { BattleTestComponent } from './battle-test/battle-test.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { FriendsComponent } from './friends/friends.component';
import { GroupactivitiesComponent } from './groupactivities/groupactivities.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { HttpClient } from '@angular/common/http'


@NgModule({
  declarations: [
    PlayerComponent,
    ProfileComponent,
    BattleTestComponent,
    PersonalinfoComponent,
    FriendsComponent,
    GroupactivitiesComponent,
    HomeComponent,
    GroupsComponent,
    CreateProfileComponent,
    
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule, 
    MatListModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [HttpClient],
})
export class PlayerModule { }
