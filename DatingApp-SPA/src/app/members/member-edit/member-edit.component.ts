import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  user: User;
  constructor(private route: ActivatedRoute,
     private alertify: AlertifyService,
     private userService: UserService,
     private authService: AuthService) { }// using route to provide data

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

  updateUser() {
this.userService.updateUser(this.authService.decodedToken.nameid, this.user ).subscribe(next => {
  this.alertify.success('profile updated successfully');
  this.editForm.reset(this.user);
  }, error => {
    this.alertify.error(error);
  });
  }
}
