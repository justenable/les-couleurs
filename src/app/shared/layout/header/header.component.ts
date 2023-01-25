import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ServicesComponent } from '../../components/services/services.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() scrollTo = new EventEmitter<string>();

  activeRoute = 'blue';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((val: any) => {
        console.log(val.url);
        this.activeRoute = val.url;
      });
  }

  scrollToFragment(fragment: string) {
    this.scrollTo.emit(fragment);
  }
}
