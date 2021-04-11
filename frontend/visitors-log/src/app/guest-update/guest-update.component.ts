import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestService } from '../service/guest.service';

@Component({
  selector: 'app-guest-update',
  templateUrl: './guest-update.component.html',
  styleUrls: ['./guest-update.component.css']
})
export class GuestUpdateComponent implements OnInit {


editGuestData = {
    firstName : '',
    guestId: '',
    lastName : '',
    emailAddress : '',
    phoneNumber : '',
    dob : ''
}


  constructor(private guestService: GuestService, private router: Router) { }





  ngOnInit(): void {
    let guestId = localStorage.getItem('editGuestId');
    this.guestService.viewGuest(guestId).subscribe((data)=>{
      this.editGuestData=JSON.parse(JSON.stringify(data));
    })
  }

  editGuest(){
    this.guestService.editGuest(this.editGuestData);
    alert("Success");
    this.router.navigate(['guest']);

  }

}
