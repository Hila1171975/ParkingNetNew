import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parking } from 'src/classes/Parking';
import { Rent } from 'src/classes/Rent';
import { FindParkingService } from '../Services/find-parking.service';
import { ParkingService } from '../Services/parking.service';
import { RentService } from '../Services/rent.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(public FindParkingService: FindParkingService, public ParkingService: ParkingService, public UserService: UserService, public RentService: RentService, public router: Router) { }
  lParking: Array<Parking> = new Array<Parking>()
  lUserParking: Array<Parking> = new Array<Parking>()
  newRent = new Rent();
  TodayDate = new Date();
  TodayEndDate = new Date();

  zoom = 16

  ngOnInit(): void {
    this.ParkingService.GetParkingList().
      subscribe(data => {
        this.lParking = data
        this.lUserParking = data.filter(x => x.UserId == this.UserService.userId)
      }, err => { alert("שגיאה ב parking-list") })

  }


  lat = this.FindParkingService.myLat;
  long = this.FindParkingService.myLan;
  // zoom=7;

  // הוספת השכרה
  addRent(p: Parking) {

    this.newRent.UserId = this.UserService.userId;
    this.FindParkingService.newRent.ParkingId = p.Id;
    // this.newRent.EntryHour = this.FindParkingService.EntryHour;
    // this.newRent.EntryDate = this.FindParkingService.EntryDate
    // this.newRent.LeavingHour = this.FindParkingService.LeavingDate;
    // this.newRent.LeavingDate = this.FindParkingService.LeavingDate;
    // this.FindParkingService.newRent = this.newRent;
    // debugger
    if (this.UserService.isConnected == true) {
      this.router.navigate(['/nav/payment'])
    }
    else {
      this.FindParkingService.payment = true;
      this.router.navigate(['/nav/login'])

    }

  }

}
