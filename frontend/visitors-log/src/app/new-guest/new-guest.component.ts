import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestService } from '../service/guest.service';

@Component({
  selector: 'app-new-guest',
  templateUrl: './new-guest.component.html',
  styleUrls: ['./new-guest.component.css']
})
export class NewGuestComponent implements OnInit {

  constructor(private guestService: GuestService , private router: Router) { }

  newGuest = {
    firstName : '',
    guestId: '',
    lastName : '',
    emailAddress : '',
    phoneNumber : '',
    dob : ''
  }


  ngOnInit(): void {
  }

  addGuest(){
    this.guestService.newGuest(this.newGuest);
    console.log("called");
    alert('sucess');
    this.router.navigate(['/'])

  }

}
