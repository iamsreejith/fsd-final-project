import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { GuestService } from '../service/guest.service';
@Component({
  selector: 'app-guest-page',
  templateUrl: './guest-page.component.html',
  styleUrls: ['./guest-page.component.css']
})
export class GuestPageComponent implements OnInit {

  guests=[{

    firstName : '',
    guestId: '',
    lastName : '',
    emailAddress : '',
    phoneNumber : '',
    dob : ''
 
  }]

  p : number = 1;

  constructor(private getGuest: GuestService , private router: Router , public auth: AuthService) { }
  guestsArray = [];
  ngOnInit(): void {
    this.getGuest.getGuest().subscribe((res)=>{
      this.guestsArray = res;
      console.log(this.guestsArray)
    })
  }


  
  editGuest(guest:any){
    localStorage.setItem("editGuestId", guest._id.toString() );
    this.router.navigate(['guest/update'])

  }


  deleteGuest(guest:any){
    this.getGuest.deleteGuest(guest._id).subscribe((data)=>{
      this.guests = this.guests.filter(p => p !== guest)
      this.router.navigate(['guest']);
    })
    this.router.navigate(['guest']);
  }



  loggedUser(){
    this.router.navigate(['/guest/new'])
  }



key: string = "guestId";
reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse
  }

  

}
