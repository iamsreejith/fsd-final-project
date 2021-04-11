import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoinmentsComponent } from './appoinments/appoinments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { GuestDeleteComponent } from './guest-delete/guest-delete.component';
import { GuestPageComponent } from './guest-page/guest-page.component';
import { GuestUpdateComponent } from './guest-update/guest-update.component';
import { GuestViewComponent } from './guest-view/guest-view.component';
import { LoginComponent } from './login/login.component';
import { NewAppoinmentComponent } from './new-appoinment/new-appoinment.component';
import { NewGuestComponent } from './new-guest/new-guest.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'guest', component: GuestPageComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'appoinments', component: AppoinmentsComponent},
  { path: 'appoinments/new', component: NewAppoinmentComponent},
  { path: 'guest/view/:id', component: GuestViewComponent},
  { path: 'guest/delete/:id', component: GuestDeleteComponent},
  { path: 'guest/new', component: NewGuestComponent},
  { path: 'guest/update', component: GuestUpdateComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
