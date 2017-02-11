import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../model/User';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
              <div>{{diagnostic}}</div>
              <p>User Details</p>
              <div *ngIf="user">
                <img src="{{user.avatarUrl}}" height="100" width="100">
                <br/>
                <label>Git Url:</label><a href="{{user.url}}">{{user.url}}</a>
                <br/><label>email:</label><a href="mailto:{{user.email}}">{{user.email}}</a>
              </div>`,
})
export class AppComponent implements OnInit {
  name = 'Angular';
  user: User;
  constructor(private userservice: UserService) { }
  ngOnInit(): void {
    this.userservice.getUserDetails().subscribe(
      data => {
        this.user = {
          url: data.url, 
          avatarUrl: data.avatar_url,
          email: data.email,
          location: data.location
        };
      }
    )
  }
  get diagnostic() { return JSON.stringify(this.user); };
}
