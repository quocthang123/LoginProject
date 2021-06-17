import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';
import { Constants } from '../constants/constants';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(Constants.serverApi+`/users`);
    }

    register(user: User) {
        return this.http.post(Constants.serverApi+`/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(Constants.serverApi+`/users/${id}`);
    }
}