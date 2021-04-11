import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppoinmentsService } from '../service/appoinments.service';
import { GuestService } from '../service/guest.service';

@Component({
  selector: 'app-new-appoinment',
  templateUrl: './new-appoinment.component.html',
  styleUrls: ['./new-appoinment.component.css']
})
export class NewAppoinmentComponent implements OnInit {

  apArray= [];

  constructor(private getGuest: GuestService,private router: Router, private appoinmentService: AppoinmentsService ) { }


  ngOnInit(): void {

  }


newAppoinment = {

    guestName: '',
    guestId: '',
    appoinmentID: '',
    officerName : '',
    purpose : '',
    appoinmentDate : '',
    status : '1'
}


addNewAppoinment(){
  this.appoinmentService.newAppoinment(this.newAppoinment);
  console.log(this.newAppoinment)
  console.log("called");
  alert('sucess');
  this.router.navigate(['/'])
}



  guestsArray : any;


}
