import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LpComponent } from './components/lp/lp.component';
import { FpComponent } from './components/fp/fp.component';
import { RpComponent } from './components/rp/rp.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RnComponent } from './components/rn/rn.component';
import { PopupComponent } from './components/popup/popup.component';
import { HeaderComponent } from './components/header/header.component';
import { UseraccountComponent } from './components/useraccount/useraccount.component';
import { AuthGuard } from './guard/auth.guard';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

const routes: Routes = [
  { path: 'lp', component: LpComponent },
  { path: 'fp', component: FpComponent },
  { path: 'rp', component: RpComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path: 'rn', component: RnComponent },
  {path: 'popup', component: PopupComponent },
  {path: 'hdr', component: HeaderComponent },
  {path: 'uac',canActivate:[AuthGuard] ,component: UseraccountComponent },
  {path: 'rpwd' ,component: ResetpasswordComponent},
  { path: '**' , component: PagenotfoundComponent },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
