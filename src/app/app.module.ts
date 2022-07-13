import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerifyService } from './verify.service';
import { HttpClientModule} from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HomePageModule
    
  ],
  providers: [VerifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
