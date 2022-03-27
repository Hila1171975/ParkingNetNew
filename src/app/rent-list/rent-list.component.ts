import { Component, OnInit } from '@angular/core';
import { Parking } from 'src/classes/Parking';
import { ParkingService } from '../Services/parking.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent implements OnInit {
  lParking:Array<Parking>=new Array<Parking>()
  lUserParking:Array<Parking>=new Array<Parking>()
  constructor(public ParkingService:ParkingService, public UserService:UserService) { }

  ngOnInit(): void {
    this.ParkingService.GetParkingList().
    subscribe(data=>{this.lParking=data
      this.lUserParking = data.filter(x=>x.UserId==this.UserService.userId)
    }, err=>{alert("שגיאה ב parking-list")})
  }

}
