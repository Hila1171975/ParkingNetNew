import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parking } from 'src/classes/Parking';
import { Rent } from 'src/classes/Rent';

@Injectable({
  providedIn: 'root'
})
export class FindParkingService {
  url:string="https://localhost:44370/api/FindParking/"
  constructor(public httpClient:HttpClient) { }

  closestParking:Array<Parking>=new Array<Parking>()
  myLat!:number
  myLan!:number
  // EntryHour!:Date
  // EntryDate!:Date
  // LeavingHour!:Date
  // LeavingDate!:Date
  payment=false;
  newRent = new Rent();



  // חיפוש 3 חניות הקרובות ביותר
  Search3Parkings(lat:number, lan:number,r:Rent):Observable<Array<Parking>>
  {
    debugger
    
    r.EntryHour?.setHours(r.EntryHour.getHours()+3)
    r.LeavingHour?.setHours(r.LeavingHour.getHours()+3)
    
    this.newRent.EntryHour=r.EntryHour!
    this.newRent.EntryDate=r.EntryDate!
    this.newRent.LeavingHour=r.LeavingHour!
    this.newRent.LeavingDate=r.LeavingDate!





    return this.httpClient.post<Array<Parking>>(this.url+ 'Search3Parkings/'+ lat + '/' + lan+'/a', r)
    
  }
}
