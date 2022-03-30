import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parking } from 'src/classes/Parking';
import { Rent } from 'src/classes/Rent';
import { ParkingService } from '../Services/parking.service';
import { RentService } from '../Services/rent.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent implements OnInit {
  lParking:Array<Parking>=new Array<Parking>()
  lUserParking:Array<Parking>=new Array<Parking>()

  ParkingCancelTime:number=0
  currentDate:Date=new Date()



  constructor(public ParkingService:ParkingService, public UserService:UserService, public RentService:RentService, public router:Router) { }

  ngOnInit(): void {
    this.ParkingService.GetParkingList().
    subscribe(data=>{this.lParking=data
      this.lUserParking = data.filter(x=>x.UserId==this.UserService.userId)
    }, err=>{alert("שגיאה ב parking-list")})
  }

  deleteRent(r:Rent){
    if(r.Id && r.ParkingId)
    {
      this.ParkingService.GetParkingById(r.ParkingId).subscribe(suc => {
        this.ParkingCancelTime!=suc.CancelTime
        if((this.currentDate.getDate() == r.EntryDate?.getDate()) && (this.currentDate.getHours()-r.EntryHour!.getHours() >= this.ParkingCancelTime))
        {
          this.RentService.deleteRent(r.Id!).subscribe(suc => { alert("ההשכרה התבטלה") }, err => { console.log(err) })
        }
        else
        {
          alert("זמן ביטול ההשכרה קרוב מידי לזמן ההשכרה")
        }
    }, err => { console.log("err") });
      this.router.navigate(['/nav/myParkingList'])
    }  
  }


}
