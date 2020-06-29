import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDisplayComponent } from './book-display.component';


const routes: Routes = [
  {
    path: '', component: BookDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookDisplayRoutingModule { }
