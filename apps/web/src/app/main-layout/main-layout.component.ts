import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';


@Component({
  selector: 'frescon-main-page',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainPageComponent implements OnDestroy {
  events: string[] = [];
  opened = false;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  mobileQuery: MediaQueryList;

  fillerNav = [{Routename: 'Dashboard', link: '/dashboard'},
    {Routename: 'Shipments', link: '/shipments'},
    {Routename: 'Quotes', link: '/quotes'},
    // {Routename: 'eBooking', link: '/ebooking'},
    {Routename: 'PO', link: '/popage'},
    {Routename: 'Schedule', link: '/schedule'},
    {Routename: 'Finance', link: '/finance'},
    {Routename: 'Stock Reservation', link: '/stock-reservation'},
    {Routename: 'Reports', link: '/reports'}
  ];

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

}
