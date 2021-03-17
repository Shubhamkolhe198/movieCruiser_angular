import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewmovieService } from './viewmovie.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    FavoriteComponent,
    AdminComponent,
    EditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ViewmovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
