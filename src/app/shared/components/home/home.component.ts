import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  whatsappLink: string = environment.whatsappLink;
  options: AnimationOptions = {
    path: '/assets/img/kids.json',
  };

  encodeURI(whatsappLink: string): string {
    return (
      whatsappLink +
      '?text=' +
      encodeURIComponent(
        'Hello there, I am interested in enorlling my toddler(s)'
      )
    );
  }
}
