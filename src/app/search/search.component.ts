import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Rent } from 'src/classes/Rent';
import { FindParkingService } from '../Services/find-parking.service';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { MapsAPILoader } from '@agm/core';

export class ProgressSpinnerOverviewExample {}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  date!: Date;
  newRent = new Rent();
  TodayDate = new Date();
  TodayEndDate = new Date();
  myLocation: String = "";
  submited = false;
  lat!: number;
  lan!: number;
  address!: string;
  private geoCoder: any;
  flagSpiner=false;

  @ViewChild('search')
  public searchElementRef: ElementRef | undefined;
  ezer!: Date;
  constructor(public FindParkingService: FindParkingService, public router: Router, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    debugger
    this.newRent.EntryDate = this.TodayDate;
    this.newRent.EntryHour = this.TodayDate;
    this.newRent.LeavingDate = this.newRent.EntryDate;

    this.ezer = new Date(this.TodayDate.getFullYear(), this.TodayDate.getMonth(), this.TodayDate.getDate(), 0, 0, 0);

    this.newRent.LeavingHour = this.ezer;

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
    });
  }

  public handleAddressChange(address: Address) {

    this.lat = address.geometry.location.lat()
    debugger;
    this.lan = address.geometry.location.lng()

  }
  ngOnInit() {
    this.date = new Date;

  }
  
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lan = position.coords.longitude;
        this.getAddress(this.lat, this.lan);
      });
    }
  }

  getAddress(latitude: number, longitude: number) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results: any, status: any) => {
      if (status === 'OK') {
        if (results[0]) {
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  FindParking() {
    this.flagSpiner=true;
    debugger;
    if (this.newRent.LeavingDate! < this.newRent.EntryDate!)
      this.newRent.LeavingDate = this.newRent.EntryDate;
      console.log('b', this.newRent.LeavingHour);
      console.log(this.newRent);
      
    this.FindParkingService.Search3Parkings(this.lat, this.lan, this.newRent).subscribe(data => {
      this.flagSpiner=false;
      if (this.FindParkingService.closestParking = data)
      {
        debugger;
        
        if (this.FindParkingService.closestParking.length == 0)
        {
          alert("לא נמצאו חניות")
          this.router.navigate(['/nav/myMap'])
        }          
        else {
          this.FindParkingService.myLat = this.lat
          this.FindParkingService.myLan = this.lan
          this.router.navigate(['/nav/myMap'])
        }
      }
        
    }, err => { console.log("err",err);}
    );
  }
}
