import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'les-couleurs';
  listener: any;
  home!: HTMLElement | null;
  ourProgram!: HTMLElement | null;
  aboutUs!: HTMLElement | null;
  navOffset: number = 8;

  constructor(private renderer: Renderer2, private router: Router) {
    this.listener = this.renderer.listen('window', 'scroll', () => {
      if (
        this.aboutUs &&
        document.documentElement.scrollTop + this.navOffset >=
          this.aboutUs?.offsetTop
      ) {
        this.router.navigate(['/'], { fragment: 'about-us' });
      } else if (
        this.ourProgram &&
        document.documentElement.scrollTop + this.navOffset >=
          this.ourProgram?.offsetTop
      ) {
        this.router.navigate(['/'], { fragment: 'our-program' });
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  ngAfterViewInit(): void {
    this.home = document.getElementById('home');
    this.ourProgram = document.getElementById('our-program');
    this.aboutUs = document.getElementById('about-us');
  }

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

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  ngOnDestroy(): void {
    this.listener();
  }
}
