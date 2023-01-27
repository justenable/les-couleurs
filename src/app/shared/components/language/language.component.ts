import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent {
  showLanguageList: boolean = false;
  languages: any[] = [
    {
      code: 'en',
      name: 'ENGLISH',
      bgColor: 'bg-gradient-to-tr from-red-600 to-pink-500',
      hoverColor: 'hover:bg-gradient-to-tr from-red-600 to-pink-500 ',
    },
    {
      code: 'fr',
      name: 'FRENCH',
      bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      hoverColor: 'hover:bg-gradient-to-tr from-blue-600 to-cyan-500 ',
    },

    {
      code: 'tn',
      name: 'TSWANA',
      bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      hoverColor: 'hover:bg-gradient-to-tr from-red-600 to-pink-500 ',
    },
    {
      code: 'st',
      name: 'SOTHO',
      bgColor: 'bg-gradient-to-tr from-red-600 to-pink-500',
      hoverColor: 'hover:bg-gradient-to-tr from-red-600 to-pink-500 ',
    },
    {
      code: 'zu',
      name: 'ZULU',
      bgColor: 'bg-gradient-to-tr from-red-600 to-pink-500',
      hoverColor: 'hover:bg-gradient-to-tr from-red-600 to-pink-500 ',
    },
    {
      code: 'sf',
      name: 'AFRIKAANS',
      bgColor: 'bg-gradient-to-tr from-red-600 to-pink-500',
      hoverColor: 'hover:bg-gradient-to-tr from-red-600 to-pink-500 ',
    },
  ];

  currentLanguage: any = this.languages[0];

  constructor(private translate: TranslateService) {}

  setLanguage(language: any) {
    this.currentLanguage = language;
    this.translate.setDefaultLang(
      this.currentLanguage.code.toLocaleLowerCase()
    );

    this.showHideLanguageList(false);
  }

  showHideLanguageList(show?: boolean) {
    this.showLanguageList = show || !this.showLanguageList;
  }
}
