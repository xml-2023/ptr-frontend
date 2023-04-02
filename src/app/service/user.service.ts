import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  private access_token: string | null = localStorage.getItem('jwt');
  currentUser: any = JSON.parse(localStorage.getItem('loggedUser') as string) || null;
  private loggedIn: boolean = !!this.access_token;
  private role: string = localStorage.getItem('role') || '';

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'users/register', user, {headers: this.headers});
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'auth/login', data, {headers: this.headers})
    .pipe(map((res) => {
      console.log(res);
      console.log('Login success');
      this.access_token = res.accessToken;
      localStorage.setItem("jwt", res.accessToken);
      this.loggedIn = true;
     }));
  }

  getMyInfo(email: any): Observable<any>{
    return this.http.get<any>(this.apiHost + 'users/find/' + email, {headers: this.headers});
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem("jwt");
    localStorage.removeItem("role");
    localStorage.removeItem("loggedUser");
    this.access_token = null;
    this.loggedIn = false;
    this.role = '';
  }

  tokenIsPresent() {
    return this.access_token != undefined && this.access_token != null;
  }

  getToken() {
    return this.access_token;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  isExpectedRole(): string {
    return this.role;
  }

  setRole(role: string) {
    this.role = role;
  }

  getEmailFromToken(access_token: any): string {
    return JSON.parse(window.atob(access_token.split('.')[1])).sub;
  }

  // getCurrentRole(): string {
  //   let roleName: string = '';
  //   this.getMyInfo(this.getEmailFromToken).subscribe(res => {
  //     roleName = res.payload.User.role.name;
  //   })

  //   return roleName;
  // }


}
