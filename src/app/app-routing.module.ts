import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { CalenderComponent } from './calender/calender.component';
import { ContactComponent } from './contact/contact.component';
import { EditParkingDetailsComponent } from './edit-parking-details/edit-parking-details.component';
import { Footer1Component } from './footer1/footer1.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { MyAreaComponent } from './my-area/my-area.component';
import { NavComponent } from './nav/nav.component';
import { ParkingListComponent } from './parking-list/parking-list.component';
import { PaymentComponent } from './payment/payment.component';
import { RentListComponent } from './rent-list/rent-list.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {
    path: "nav", component: NavComponent, children: [
      { path: "myhome", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "search", component: SearchComponent },
      { path: "bankDetails", component: BankDetailsComponent },
      { path: "payment", component: PaymentComponent },
      { path: "myParkingList", component: ParkingListComponent },
      { path: "editParkingDetails/:id", component: EditParkingDetailsComponent },
      { path: "myFooter", component: Footer1Component },
      { path: "myMap", component: MapComponent },
      { path: "myCalender", component: CalenderComponent },
      { path: "contact", component: ContactComponent },
      { path: "myRentList", component: RentListComponent },
      { path: "myArea", component: MyAreaComponent }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
