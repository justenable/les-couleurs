import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LottieModule } from 'ngx-lottie';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

const declarations = [
  HeaderComponent,
  FooterComponent,
  AboutUsComponent,
  ServicesComponent,
  HomeComponent,
];

const imports = [
  CommonModule,
  HttpClientModule,
  LottieModule,
  RouterModule,
  TranslateModule,
];
@NgModule({
  declarations,
  imports,
  exports: [...declarations, ...imports],
})
export class SharedModule {}
