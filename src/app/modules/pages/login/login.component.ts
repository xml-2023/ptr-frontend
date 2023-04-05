import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginData } from 'src/app/model/login-data.model';
import { UserService } from 'src/app/service/user.service';
import { MyErrorStateMatcher } from '../register-user/register-user.component';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public data: LoginData = new LoginData();
  public currentUser: any;

  
  constructor(private userService: UserService, private toastr : ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  public login() {
    this.userService.login(this.data).subscribe(res => {
      console.log(res);
      this.userService.getMyInfo(this.data.email).subscribe(res => {
        this.userService.currentUser = res.payload.User;
        this.currentUser = res.payload.User;
        localStorage.setItem('loggedUser', JSON.stringify(this.currentUser));
        localStorage.setItem("role", res.payload.User.role.name);
        this.userService.setRole(res.payload.User.role.name);     
        if (this.currentUser.role.name === 'REGISTERED_USER') {
            this.router.navigate(['regular-user/flight-search']);
        }
        else if (this.currentUser.role.name === 'ADMINISTRATOR') {
            this.router.navigate(['admin']);
        }        
      });
    },
    error => {
      this.toastr.error("Error!", "Incorrect username or password.");
    })
      
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  requiredPasswordControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

}
