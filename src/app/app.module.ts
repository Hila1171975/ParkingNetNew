import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ScheduleModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService } from '@syncfusion/ej2-angular-schedule';
import { RouterModule, Routes } from '@angular/router';
// import { GoogleMapsModule } from '@angular/google-maps';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { Footer1Component } from './footer1/footer1.component';
import { ContactComponent } from './contact/contact.component'
import { LoginComponent } from './login/login.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { ParkingListComponent } from './parking-list/parking-list.component';
import { EditParkingDetailsComponent } from './edit-parking-details/edit-parking-details.component';
import { MapComponent } from './map/map.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';
import { CalenderComponent } from './calender/calender.component';


import { BankAccountService } from './Services/bank-account.service';
import { ParkingService } from './Services/parking.service';
import { RentService } from './Services/rent.service';
import { UserService } from './Services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    Footer1Component,
    ContactComponent,
    LoginComponent,
    BankDetailsComponent,
    ParkingListComponent,
    EditParkingDetailsComponent,
    MapComponent,
    PaymentComponent,
    SearchComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ScheduleModule,
    FormsModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC6wEMLBoWos4fb1Vgzmukt25AzX_6ogcw',
      libraries: ['places']
    })
  ],
  // providers: [BankAccountService, ParkingService, RentService, UserService,  DayService, WeekService, WorkWeekService, MonthService, AgendaService,DragAndDropService,ResizeService],
  providers: [BankAccountService, ParkingService, RentService, UserService, DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
