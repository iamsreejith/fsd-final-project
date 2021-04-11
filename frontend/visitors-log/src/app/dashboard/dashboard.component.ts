import { Component, OnInit } from '@angular/core';
import { AppoinmentsService } from '../service/appoinments.service';
import { GuestService } from '../service/guest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  
  apArray= [];

  guestsArray : any;



  constructor( private getGuest: GuestService, private appoinmentService: AppoinmentsService) { }

  ngOnInit(): void {

    this.getGuest.getGuest().subscribe((res)=>{
      this.guestsArray = res;
      console.log(this.guestsArray)
    })


    this.appoinmentService.getAppoinments().subscribe((res)=>{
      this.apArray = res;
      console.log(this.apArray)
    })


  }


  key: string = "status";
 reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse
  }


  p : number = 1;


  

}
