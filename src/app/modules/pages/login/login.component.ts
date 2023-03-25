import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/model/login-data.model';
import { UserService } from 'src/app/service/user.service';
import { MyErrorStateMatcher } from '../register-user/register-user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public data: LoginData = new LoginData();
  public currentUser: any;

  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public login() {
    this.userService.login(this.data).subscribe(res => {
      console.log(res);
      this.userService.getMyInfo(this.data.email).subscribe(res => {
        this.userService.currentUser = res.payload.User;
        this.currentUser = res.payload.User;        
        if (this.currentUser.role.name === 'REGISTERED_USER') {
            //this.router.navigate(['putanja do pocetne stranice za registrovanog korisnika']);
            alert("registrovani korisnik")
        }
        else if (this.currentUser.role.name === 'ADMINISTRATOR') {
            //this.router.navigate(['putanja do pocetne stranice za administratora']);
            alert("admin")
        }        
      });
    },
    error => {
      alert("Incorrect username or password.");
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
