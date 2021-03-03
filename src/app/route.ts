import { Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { ProfileComponent } from "./profile/profile.component";

export const appRoute:Routes = [
  {
    path:"users",
    component:UsersComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  }
]