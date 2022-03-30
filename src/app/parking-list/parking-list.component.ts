import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parking } from 'src/classes/Parking';
import { ParkingService } from '../Services/parking.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent implements OnInit {
lParking:Array<Parking>=new Array<Parking>()
lUserParking:Array<Parking>=new Array<Parking>()

  constructor(public ParkingService:ParkingService, public UserService:UserService, public router:Router) { }

  ngOnInit(): void {
    this.ParkingService.GetParkingList().
    subscribe(data=>{this.lParking=data
      this.lUserParking = data.filter(x=>x.UserId==this.UserService.userId && x.Lan!=0 && x.Lat!=0)
    }, err=>{alert("שגיאה ב parking-list")})

  }

  deleteParking(p:Parking){
    p.Lan=0;
    p.Lat=0;
    this.ParkingService.updateParking(p).subscribe(suc => { alert("החניה אינה זמינה יותר") }, err => { console.log(err) })

    this.router.navigate(['/nav/myParkingList'])
  }

}
