import {User} from "../user";
import {UserService} from "../user.service";
import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'user-list',
    templateUrl: 'app/users/list/user-list.component.html',
    styleUrls: ['app/users/list/user-list.component.css'],
    providers: [UserService]
})
export class UserListComponent implements OnInit {

    users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getUsers()
        .then((users) => this.users = users)
    }



}
