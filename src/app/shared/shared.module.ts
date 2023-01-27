import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LottieModule } from 'ngx-lottie';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurProgramComponent } from './components/our-program/our-program.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { LanguageComponent } from './components/language/language.component';

const declarations = [
  HeaderComponent,
  FooterComponent,
  AboutUsComponent,
  OurProgramComponent,
  HomeComponent,
  ToggleComponent,
  LanguageComponent,
];

const imports = [
  CommonModule,
  HttpClientModule,
  LottieModule,
  RouterModule,
  TranslateModule,
];
@NgModule({
  declarations: [...declarations],
  imports,
  exports: [...declarations, ...imports],
})
export class SharedModule {}
