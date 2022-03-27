import { Component, OnInit } from '@angular/core';
import { Parking } from 'src/classes/Parking';
import { FindParkingService } from '../Services/find-parking.service';
import { ParkingService } from '../Services/parking.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(public FindParkingService: FindParkingService,public ParkingService:ParkingService, public UserService:UserService) { }
  lParking:Array<Parking>=new Array<Parking>()
  lUserParking:Array<Parking>=new Array<Parking>()

  zoom=16
  
  ngOnInit(): void {
    this.ParkingService.GetParkingList().
    subscribe(data=>{this.lParking=data
      this.lUserParking = data.filter(x=>x.UserId==this.UserService.userId)
    }, err=>{alert("שגיאה ב parking-list")})

  }

}
