import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleTestComponent } from './player/battle-test/battle-test.component';
import { CreateProfileComponent } from './player/create-profile/create-profile.component';
import { ProfileComponent } from './player/profile/profile.component';
import { RouteQuardGuard } from './route-quard.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'player',
    loadChildren: () => import('./player/player.module').then(m => m.PlayerModule),
    
  },
  {path:'battle-test',component:BattleTestComponent},
  {path:'profile',component:ProfileComponent},
  {path:'create-update-profile',component:CreateProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
