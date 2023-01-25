import { Component } from '@angular/core';
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
