import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'ParkingNET1';
  constructor(public router:Router){}
//   lat = 22.4064172;
//   long = 69.0750171;
//   zoom=7;
  
//   markers = [
//         {
//             lat: 21.1594627,
//             lng: 72.6822083,
//             label: 'Surat'
//         },
//         {
//             lat: 23.0204978,
//             lng: 72.4396548,
//             label: 'Ahmedabad'
//         },
//         {
//             lat: 22.2736308,
//             lng: 70.7512555,
//             label: 'Rajkot'
//         }
//     ];


ngOnInit(): void {
    this.router.navigate(['/nav/myMap']);
   //this. location();
  }

}
