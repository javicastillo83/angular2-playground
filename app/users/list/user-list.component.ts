import {UserDetailComponent} from "../detail/user-detail.component";
import {Logger} from "../../shared/logger/logger.service";
import {Router,ROUTER_DIRECTIVES} from "@angular/router";
import {User} from "../user";
import {UserService} from "../user.service";
import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'user-list',
    templateUrl: 'app/users/list/user-list.component.html',
    styleUrls: ['app/users/list/user-list.component.css'],
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES, UserDetailComponent]
})
export class UserListComponent implements OnInit {

    users: User[];
    selectedUser: User;

    constructor(private router:Router, private logger: Logger, private userService: UserService) { }

    ngOnInit() {
        this.logger.debug("ngOnInit from UserListComponent is called");
        this.userService.getUsers()
            .then((users) => this.users = users)
    }

    selectUser(user:User){
      this.selectedUser = user;
    }

    showDetail(){
      if(this.selectedUser!=null){
        this.router.navigate(['users',this.selectedUser.id])
      }
    }
}
