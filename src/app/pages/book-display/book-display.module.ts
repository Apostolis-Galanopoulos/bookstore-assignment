import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookDisplayRoutingModule } from './book-display-routing.module';
import { BookDisplayComponent } from './book-display.component';
import { ThemeModule } from 'src/app/@theme/theme.module';


@NgModule({
  declarations: [BookDisplayComponent],
  imports: [
    ThemeModule,
    CommonModule,
    BookDisplayRoutingModule
  ]
})
export class BookDisplayModule { }
