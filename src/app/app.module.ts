import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PaintComponent } from './paint/paint.component';

const  appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: '', component: HomeComponent},
  { path: 'draw', component: PaintComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    PaintComponent
  ],
  imports: [
    BrowserModule,  RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent, RegisterComponent]
})
export class AppModule { }
