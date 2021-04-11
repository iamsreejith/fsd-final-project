import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuestService } from '../service/guest.service';

@Component({
  selector: 'app-guest-view',
  templateUrl: './guest-view.component.html',
  styleUrls: ['./guest-view.component.css']
})
export class GuestViewComponent implements OnInit {

  guestId: String = '';
  GuestData: any;
  constructor(private activateRoute: ActivatedRoute ,
    private guestService: GuestService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data =>{
      this.guestId = data.id
      console.log(this.guestId)

    })

    


    this.guestService.viewGuest(this.guestId).subscribe(data=>{
      this.GuestData= data['results'];
      console.log(this.GuestData)

    })

  }

  guestDelete(GuestData:any){
    this.guestService.deleteGuest(GuestData._id).subscribe((data)=>{
      console.log(data)
    })
    
  }

}
