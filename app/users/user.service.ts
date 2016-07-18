import {User} from "./user";
import {Injectable} from "@angular/core";

@Injectable()
export class UserService {

    getUser(id: number) : Promise<User> {
        return Promise.resolve({ id: 1, name: 'javi' })
    }

    getUsers(): Promise<User[]> {
        return Promise.resolve([
            {
                id: 1,
                name: 'javi1'
            },
            {
                id: 2,
                name: 'javi2'
            }]);
    }
}
