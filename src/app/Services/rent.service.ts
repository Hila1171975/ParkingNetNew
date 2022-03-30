import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rent } from 'src/classes/Rent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  url:string="https://localhost:44370/api/Rent/"
  constructor(public httpClient:HttpClient) { }

  // הוספת השכרה לרשימה
  addRent(r:Rent):Observable<boolean>
  {
    debugger
    return this.httpClient.put<boolean>(this.url+'addRent',r)
  }

  //הסרת השכרה מהרשימה
  deleteRent(id:number):Observable<boolean>
  {
    return this.httpClient.delete<boolean>(this.url+ 'deleteRent/'+id)
  }
  
}
