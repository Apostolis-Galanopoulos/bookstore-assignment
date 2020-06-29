import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/materials/button/button.component';
import { InputComponent } from './components/materials/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaComponent } from './components/materials/textarea/textarea.component';
import { InputWithChildrenComponent } from './components/materials/input-with-children/input-with-children.component';
import { RatingComponent } from './components/rating/rating.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  BreadcrumbComponent,
  ButtonComponent,
  InputComponent,
  TextareaComponent,
  InputWithChildrenComponent,
  RatingComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
    };
  }
}
