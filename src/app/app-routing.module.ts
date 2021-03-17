import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:"favorite",component:FavoriteComponent},
  {path:"customer",component:ViewComponent},
  {path:"admin",component:AdminComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
