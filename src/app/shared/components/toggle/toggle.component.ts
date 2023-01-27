import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  toggleActive: boolean = false;

  constructor(private translate: TranslateService) {}

  handleToggleActive() {
    this.toggleActive = !this.toggleActive;
    this.setLanguage(!this.toggleActive);
  }

  setLanguage(isEnglish: boolean) {
    this.translate.use(isEnglish ? 'en' : 'fr');
  }
}
