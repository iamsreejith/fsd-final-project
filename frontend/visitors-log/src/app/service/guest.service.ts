import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http: HttpClient) { }
  

  getGuest(){
    return this.http.get<any>('http://localhost:3000/guest')
  }

  viewGuest(id){

    return this.http.get<any>('http://localhost:3000/guest/view/'+id)

  }


  editGuest(guest:any){
    console.log('cline update')
    return this.http.put("http://localhost:3000/guest/update",guest).subscribe(data=>{
      console.log(data)
    })
  }

  deleteGuest(id:any){
    console.log(id)
    return this.http.delete<any>('http://localhost:3000/guest/delete/'+id)
  }

  newGuest(guest:any){
    return this.http.post("http://localhost:3000/guest/insert",{"details":guest}).subscribe(data=>{
      console.log(data)
    })
  }
}
