import {Logger} from "./shared/logger/logger.service";
import {UserListComponent} from "./users/list/user-list.component";
import {Component, OnInit} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [Logger]
})
export class AppComponent {
}
