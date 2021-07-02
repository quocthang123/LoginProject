import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models/user';
import { Constants } from '../constants/constants';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        console.log("====1=====");
        console.log(localStorage);
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
        console.log("====2=====");
        console.log(this.currentUserSubject);
        this.currentUser = this.currentUserSubject.asObservable();
        console.log("====3=====");
        console.log(this.currentUser);
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login( username:any, password:any) {
        return this.http.post<any>(Constants.serverApi+`/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(new User);
    }
}