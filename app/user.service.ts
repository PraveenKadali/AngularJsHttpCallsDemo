import { Injectable } from '@angular/core';
import { Observable } from "RxJS/Rx";
import { Http, Headers } from '@angular/http';
import { User } from '../model/User';
import 'rxjs/Rx';


@Injectable()
export class UserService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private UsersApiUrl = 'https://api.github.com/users';  // URL to web api
    constructor(private http: Http) { }
    getUserDetails() {
        const url = this.UsersApiUrl + '/PraveenKadali'
        return this.http.get(url).map(response => response.json());
    }
}