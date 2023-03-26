import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-regular-user-sidebar',
  templateUrl: './regular-user-sidebar.component.html',
  styleUrls: ['./regular-user-sidebar.component.css']
})
export class RegularUserSidebarComponent implements OnInit{

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout()
  }
}
