import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  private access_token = null;
  currentUser!:any;

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
      localStorage.setItem("jwt", res.accessToken)
     }));
  }

  getMyInfo(email: any): Observable<any>{
    return this.http.post<any>(this.apiHost + 'users/find/' + email, {headers: this.headers});
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem("jwt");
    this.access_token = null;
    //this.router.navigate(['/login']);
  }

  tokenIsPresent() {
    return this.access_token != undefined && this.access_token != null;
  }

  getToken() {
    return this.access_token;
  }

}
