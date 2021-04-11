import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  user = {
    username : '',
    password : ''
  }
  constructor( private authService: AuthService , private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.authService.loginUser(this.user).subscribe((res)=>{
      localStorage.setItem('token',res.token)
      this.router.navigate(['guest'])
    })
  }

}
