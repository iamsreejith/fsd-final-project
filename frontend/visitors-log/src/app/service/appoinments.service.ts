import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentsService {

  constructor(private http: HttpClient) { }


  newAppoinment(appoinmet:any){
    return this.http.post("http://localhost:3000/appoinment/insert", {"details":appoinmet}).subscribe(data=>{
      console.log(data)
    })
  }

  getAppoinments(){
    return this.http.get<any>('http://localhost:3000/appoinments')
  }


  updateAppoinment(datas:any){
    return this.http.put<any>('http://localhost:3000/appoinments/update',datas).subscribe()

  }



}
