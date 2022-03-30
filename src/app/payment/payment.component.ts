import { Component, OnInit } from '@angular/core';
import { FindParkingService } from '../Services/find-parking.service';
import { RentService } from '../Services/rent.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public FindParkingService: FindParkingService, public RentService: RentService, public UserService: UserService) { }

  ngOnInit(): void {
  }

  addRent() {
    this.FindParkingService.newRent.UserId = this.UserService.userId;
    this.RentService.addRent(this.FindParkingService.newRent).subscribe(suc => {
      if (suc == false)
        alert("תקלה בהוספת השכרה נסה שנית")
      else {
        alert("ההשכרה נשמרה בהצלחה")

      }
    }, err => { console.log("err") });

  }

}

