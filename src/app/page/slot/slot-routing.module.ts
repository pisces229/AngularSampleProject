import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlotMainComponent } from './slot-main/slot-main.component';

const routes: Routes = [
  {
    path: '',
    component: SlotMainComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlotRoutingModule { }
