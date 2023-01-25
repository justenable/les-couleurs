import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  speakingOptions: AnimationOptions = {
    path: '/assets/img/speaking.json',
  };
  singingOptions: AnimationOptions = {
    path: '/assets/img/singing.json',
  };
  movingOptions: AnimationOptions = {
    path: '/assets/img/moving.json',
  };
  readingOptions: AnimationOptions = {
    path: '/assets/img/reading.json',
  };
  creatingOptions: AnimationOptions = {
    path: '/assets/img/creating.json',
  };
}
