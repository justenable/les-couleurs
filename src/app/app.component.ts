import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'les-couleurs';

  constructor() {}

  scrollTo(fragment: string) {
    if (fragment === '') {
      fragment = 'home';
    }

    document.getElementById(fragment)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
