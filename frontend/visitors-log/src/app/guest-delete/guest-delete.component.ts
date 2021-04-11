import { Component, OnInit } from '@angular/core';
import { GuestService } from '../service/guest.service';

@Component({
  selector: 'app-guest-delete',
  templateUrl: './guest-delete.component.html',
  styleUrls: ['./guest-delete.component.css']
})
export class GuestDeleteComponent implements OnInit {

  constructor(private guestService: GuestService) { }

  ngOnInit(): void {

    
  }

  // guestDelete(id)

}
