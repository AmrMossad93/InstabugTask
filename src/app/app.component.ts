import { Component } from '@angular/core';
import {LoaderService} from "./Services/Loader/loader.service";
import {NavigationEnd, NavigationStart, Router, Event,} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InstabugTask';

  constructor(public router: Router, private loaderService: LoaderService) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loaderService.show();
      }
      if (routerEvent instanceof NavigationEnd) {
        this.loaderService.hide();
      }
      window.scrollTo(0, 0);
    });
  }
}
