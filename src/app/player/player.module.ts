import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';
import { ProfileComponent } from './profile/profile.component';
import {MaterialModule} from '../material/material.module'

@NgModule({
  declarations: [
    PlayerComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    MaterialModule
  ]
})
export class PlayerModule { }
