import { Component } from "@angular/core";
import { AuthenticationService, UserDetails } from "../authentication.service";



@Component({
  templateUrl: './profile.component.html',

})
export class ProfileComponent {
  details: UserDetails;

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    this.auth.profile().subscribe(user => {this.details = user.user},
      (err) => {console.error(err)}
    );

  }

  public call() {
    this.auth.profile().subscribe(
      user => {
        this.details = user;
        console.log(user.user.name)
      },

      (err) => {
        console.error(err);
      }
    );
  }
}
