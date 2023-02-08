import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';
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
  currentYear: number;
  todaysDay: number;

  constructor(private translate: TranslateService) {
    const date = new Date();
    this.currentYear = date.getFullYear();
    this.todaysDay = date.getDay();
  }

  openWeekDays: any = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];
  closedWeekDays: any = ['SATURDAY', 'SUNDAY'];
  hours: any = {
    open: '9 AM',
    close: '5 PM',
  };

  encodeURI(whatsappLink: string): Observable<string> {
    return this.translate
      .get('GLOBAL.WHATSAPP_MESSAGE')
      .pipe(
        map((message) => `${whatsappLink}?text=${encodeURIComponent(message)}`)
      );
  }
}
