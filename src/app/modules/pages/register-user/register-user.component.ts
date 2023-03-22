import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  public user: User = new User();
  public confirmationPass: string = '';
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  requiredNameControl = new FormControl('', [
    Validators.required,
  ]);

  requiredSurnameControl = new FormControl('', [
    Validators.required,
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  requiredPasswordControl = new FormControl('', [
    Validators.required,
  ]);

  requiredConfirmationPasswordControl = new FormControl('', [
    Validators.required,
  ])

  matcher = new MyErrorStateMatcher();

  public registerUser() {
    if (this.isInputValid()) {
      if (this.isPassConfirmed()) {
        this.userService.registerUser(this.user).subscribe(res => {
          if (res.report.valid === true) {
            alert('You have successfully registered!');
          }
          else {
            if (res.report.errorMessages.name !== undefined) {
              alert(res.report.errorMessages.name);
            }
            if (res.report.errorMessages.surname !== undefined) {
              alert(res.report.errorMessages.surname);
            }
            if (res.report.errorMessages.email !== undefined) {
              alert(res.report.errorMessages.email);
            }
            if (res.report.errorMessages.password !== undefined) {
              alert(res.report.errorMessages.password);
            }
             
          }
        })
    } else {
      alert("Password is not confirmed!");
    }
    }
  }
  
  private isInputValid(): boolean {
    return this.user.email != '' && this.user.password != ''
          && this.user.name != '' && this.user.surname != '' ;
  }

  private isPassConfirmed(): boolean {
    return this.user.password === this.confirmationPass;
  }

}
