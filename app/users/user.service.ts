import {Logger} from "../shared/logger/logger.service";
import {User} from "./user";
import {Injectable} from "@angular/core";

@Injectable()
export class UserService {

    constructor(private logger: Logger) {  }


    getUser(id: number): Promise<User> {
        this.logger.debug("getUser from UserService is called");
        return Promise.resolve({ id: id, name: 'javi' + id })
    }

    getUsers(): Promise<User[]> {
      this.logger.debug("getUsers from UserService is called");
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
