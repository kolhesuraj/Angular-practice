import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './home-page/home-page.module';
import { PageComponent } from './home-page/page/page.component';
import { LoginPageComponent } from './login-page/login-page.component';
const routes: Routes = [
  {path:'',redirectTo:'/login' , pathMatch:'full'},
  {path:'login' , component:LoginPageComponent},
  {path: 'homePage', component: PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
