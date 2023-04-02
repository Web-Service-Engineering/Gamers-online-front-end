import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteQuardGuard } from '../route-quard.guard';
import { BattleTestComponent } from './battle-test/battle-test.component';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:PlayerComponent, 
     children:[
       {path:'',component:HomeComponent},
       {path:'home',component:HomeComponent},
       {path:'profile',component:ProfileComponent},
       {path:'battle test',component:BattleTestComponent},
       {path:'groups',component:GroupsComponent}
     ]
 },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule {

 }
