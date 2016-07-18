import {User} from "../user";
import {UserService} from "../user.service";
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'user-detail',
    templateUrl: 'app/users/detail/user-detail.component.html',
    styleUrls: ['app/users/detail/user-detail.component.css'],
    providers: [UserService]
})
export class UserDetailComponent implements OnInit {

    user: User;

    constructor(private userService: UserService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = +params['id']; //(+) para convertir a number
            this.userService.getUser(id).then( (user) => this.user = user);
        });

    }
}
