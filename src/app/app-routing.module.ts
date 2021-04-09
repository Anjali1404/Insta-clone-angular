import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessageInboxComponent } from './message-inbox/message-inbox.component';

const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
  {
    path:'direct/inbox',
    component:MessageInboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
