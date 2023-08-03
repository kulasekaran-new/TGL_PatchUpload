import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {PatchListComponent} from "./patch-list/patch-list.component"
import {AdminScreenComponent} from "./admin-screen/admin-screen.component"
import  {LoginComponent} from "./login/login.component"



const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "patch_list",
    component: PatchListComponent,
    // canActivate:[AuthenticationGuard]
  },
  {
    path: "admin_screen",
    component: AdminScreenComponent,
    // canActivate:[AuthenticationGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    // canActivate:[AuthenticationGuard]
  },
  {
    path: "login/:username/:token",
    component: LoginComponent,
    //  canActivate:[AuthenticationGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
