import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-services',
  templateUrl: './our-program.component.html',
  styleUrls: ['./our-program.component.scss'],
})
export class OurProgramComponent {
  speakingOptions: AnimationOptions = {
    path: './assets/img/speaking.json',
  };
  singingOptions: AnimationOptions = {
    path: './assets/img/singing.json',
  };
  movingOptions: AnimationOptions = {
    path: './assets/img/moving.json',
  };
  readingOptions: AnimationOptions = {
    path: './assets/img/reading.json',
  };
  creatingOptions: AnimationOptions = {
    path: './assets/img/creating.json',
  };

  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.getDefaultLang();
    this.translate.onLangChange.subscribe(
      ({ lang }) => (this.currentLang = lang)
    );
  }
}
