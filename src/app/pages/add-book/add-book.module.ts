import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddBookRoutingModule } from './add-book-routing.module';
import { AddBookComponent } from './add-book.component';
import { ThemeModule } from 'src/app/@theme/theme.module';


@NgModule({
  declarations: [AddBookComponent],
  imports: [
    ThemeModule,
    ReactiveFormsModule,
    CommonModule,
    AddBookRoutingModule
  ]
})
export class AddBookModule { }
