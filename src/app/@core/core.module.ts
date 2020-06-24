import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { MenuService } from './menu/menu.service';
import { reducer } from './books/books.reducer';

const PROVIDERS = [
  MenuService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      book: reducer
    })
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...PROVIDERS]
    };
  }
}
