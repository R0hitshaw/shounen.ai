import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LpComponent } from './components/lp/lp.component';
import { AppRoutingModule } from './app-routing.module';
import { FpComponent } from './components/fp/fp.component';
import { RpComponent } from './components/rp/rp.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RnComponent } from './components/rn/rn.component';
import { PopupComponent } from './components/popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthGuard } from './guard/auth.guard';
import { UseraccountComponent } from './components/useraccount/useraccount.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    LpComponent,
    FpComponent,
    RpComponent,
    HomeComponent,
    AboutComponent,
    RnComponent,
    PopupComponent,
    HeaderComponent,
    PagenotfoundComponent,
    UseraccountComponent,
    ProfileComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
