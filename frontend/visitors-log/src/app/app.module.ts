import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { TokenService } from "./service/token.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuestPageComponent } from './guest-page/guest-page.component';
import { AppoinmentsComponent } from './appoinments/appoinments.component';
import { GuestDeleteComponent } from './guest-delete/guest-delete.component';
import { GuestViewComponent } from './guest-view/guest-view.component';
import { NewGuestComponent } from './new-guest/new-guest.component';
import { NewAppoinmentComponent } from './new-appoinment/new-appoinment.component';
import { GuestUpdateComponent } from "./guest-update/guest-update.component";
import { LoginComponent } from './login/login.component';
import { GuestService } from "./service/guest.service";
import { AppoinmentsService } from "./service/appoinments.service";
import { AuthService } from "./service/auth.service";
import { Ng2OrderModule } from "ng2-order-pipe";
import { NgxPaginationModule } from "ngx-pagination";




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    GuestPageComponent,
    AppoinmentsComponent,
    GuestDeleteComponent,
    GuestViewComponent,
    NewGuestComponent,
    NewAppoinmentComponent,
    GuestUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [
    GuestService,
    AppoinmentsService,
    AuthService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
