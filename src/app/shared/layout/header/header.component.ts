import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { OurProgramComponent } from '../../components/our-program/our-program.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() scrollTo = new EventEmitter<string>();
  menuIsExpanded: boolean = false;

  activeRoute = '/';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((val: any) => {
        this.activeRoute = val.url;
      });
  }

  scrollToFragment(fragment: string): void {
    this.scrollTo.emit(fragment);
  }

  expandMenu(expand?: boolean): void {
    this.menuIsExpanded = expand || !this.menuIsExpanded;
  }
}
