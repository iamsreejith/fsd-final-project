import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppoinmentsService } from '../service/appoinments.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.css']
})
export class AppoinmentsComponent implements OnInit {

  constructor(private getAppoinment: AppoinmentsService, public auth:AuthService , private router: Router) { }

  apArray= [];

  ngOnInit(): void {
    this.getAppoinment.getAppoinments().subscribe((res)=>{
      this.apArray = res;
      console.log(this.apArray)
    })

    

    
  }


  accept(data : any){
    console.log(data)

    let newId = data._id;
    console.log(newId)
    this.getAppoinment.updateAppoinment(data)
    
    console.log('sucess')
    this.router.navigate(['dashboard']);



  }


  key: string = "guestId";
reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse
  }

  

  p : number = 1;



}
