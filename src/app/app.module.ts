import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { ThemeModule } from './@theme/theme.module';
import { CoreModule } from './@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BooksService } from './@core/books/books.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  providers: [BooksService, {provide : APP_INITIALIZER, useFactory : onLoad, deps: [BooksService] , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function onLoad(booksService: BooksService)
{
  return () => booksService.getBooks();
}