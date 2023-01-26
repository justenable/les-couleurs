import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  whatsappLink: string = environment.whatsappLink;
  facebookLink: string = environment.facebookLink;
  phoneNumber: string = environment.phoneNumber;
  currentYear: number = new Date().getFullYear();

  constructor(private translate: TranslateService) {}

  encodeURI(whatsappLink: string): string {
    const isEnglish = 'en' === this.translate.getDefaultLang();
    return (
      whatsappLink +
      '?text=' +
      encodeURIComponent(
        isEnglish
          ? 'Hello there, I am interested in enrolling my toddler(s)'
          : 'Bonjour, je souhaite inscrire mon/mes enfant(s)'
      )
    );
  }
}
