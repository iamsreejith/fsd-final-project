import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }


  logOut(){
    localStorage.removeItem('token')
    this.router.navigate(['guest'])
  }
  ngOnInit(): void {
  }

}
