import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { SearchListComponentComponent } from './search-list-component/search-list-component.component';
import { SearchDetailComponentComponent } from './search-detail-component/search-detail-component.component';
import {SearchComponentServiceService} from './services/SearchComponentService/search-component-service.service';
import {SearchListComponentService} from './services/SearchListComponentService/search-list-component.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { SetterService } from './services/data-setter/setter.service';
import { FavouritelistComponent } from './favouritelist/favouritelist.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { FavouriteService } from './services/favourite/favourite.service';
import { RouterModule, Routes } from '@angular/router';
import {  DeleteFavouriteService } from './services/favourite/delete-favourite.service';
import { UpdateModuleComponent } from './update-module/update-module.component';
import { UpdationServiceService } from './services/updation-service/updation-service.service';
import { RegisterComponent } from './register/register.component';
import { RegisterServiceService } from './services/register-service/register-service.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    SearchListComponentComponent,
    SearchDetailComponentComponent,
    FavouritelistComponent,
    FavouriteComponent,
    UpdateModuleComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
    {path:'',redirectTo:'/login',pathMatch:'full'}, 
    {path:'favourite',component:FavouritelistComponent},
    {path:'register',component:RegisterComponent},
    {path:'login', component:LoginComponent},
    {path:'home',component:HomeComponent}
    ])
  ],
  providers: [SearchComponentServiceService, SearchListComponentService, 
  SetterService,FavouriteService, DeleteFavouriteService, UpdationServiceService, 
  RegisterServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
