import {Logger} from "../../shared/logger/logger.service";
import {User} from "../user";
import {UserService} from "../user.service";
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit, OnDestroy, Input} from "@angular/core";

@Component({
    selector: 'user-detail',
    templateUrl: 'app/users/detail/user-detail.component.html',
    styleUrls: ['app/users/detail/user-detail.component.css'],
    providers: [UserService]
})
export class UserDetailComponent implements OnInit, OnDestroy {

    @Input()
    user: User;

    paramSubscription: any;

    constructor(private route: ActivatedRoute, private logger: Logger, private userService: UserService) { }

    ngOnInit() {
        this.logger.debug("ngOnInit from UserDetailComponent is called");
        this.paramSubscription = this.route.params.subscribe(params => { //cargamos user si viene por parametro el id
            if (params['id'] != null) {
                let id = +params['id']; //(+) para convertir a number
                this.userService.getUser(id).then((user) => this.user = user);
            }
        });
    }

    ngOnDestroy() {
      this.paramSubscription.unsubscribe()
    }
}
