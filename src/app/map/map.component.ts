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
  

    lat = this.FindParkingService.myLat;
  long = this.FindParkingService.myLan;
  // zoom=7;
  
  m2=this.FindParkingService.closestParking
  markers = [
        {
            lat: 31.699355133149805,
            lng: 35.1035194278321,
            label: 'Surat'
        },
        {
            lat: 31.700078071929429,
            lng: 35.107458218466185,
            label: 'Ahmedabad'
        }
        // {
        //     lat: 22.2736308,
        //     lng: 70.7512555,
        //     label: 'Rajkot'
        // }
    ];

}
