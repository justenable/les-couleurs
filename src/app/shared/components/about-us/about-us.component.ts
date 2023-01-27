import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.getDefaultLang();
    this.translate.onLangChange.subscribe(
      ({ lang }) => (this.currentLang = lang)
    );
  }
}
