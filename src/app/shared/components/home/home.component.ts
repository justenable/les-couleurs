import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnimationOptions } from 'ngx-lottie';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  whatsappLink: string = environment.whatsappLink;
  options: AnimationOptions = {
    path: '/assets/img/kids.json',
  };

  currentYear: number = new Date().getFullYear();

  constructor(private translate: TranslateService) {}

  encodeURI(whatsappLink: string): Observable<string> {
    return this.translate
      .get('GLOBAL.WHATSAPP_MESSAGE')
      .pipe(
        map((message) => `${whatsappLink}?text=${encodeURIComponent(message)}`)
      );
  }
}
