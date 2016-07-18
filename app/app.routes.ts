import {UserDetailComponent} from "./users/detail/user-detail.component";
import {UserListComponent} from "./users/list/user-list.component";
import { provideRouter, RouterConfig }  from '@angular/router';

const routes: RouterConfig = [
  {
    path:'users',
    component: UserListComponent
  },
  {
    path:'users/:id',
    component: UserDetailComponent
  },
  {
    path:'',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
