import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ResizeService } from './services/resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular/Material2/Flex-Layout';
  isDarkTheme = true;
  sideNameMode = 'over';
  showSideNav = false;
  enableSideNavToggle = true;
  resizeSubscription: Subscription;

  constructor(
    private resizeService: ResizeService
  ) {}

  ngOnInit() {
    this.onResize(this.resizeService.currentWindowWidth);
    this.resizeSubscription = this.resizeService.onResize$.subscribe((window: Window) => {
      this.onResize(window.innerWidth);
    });
  }

  onResize(windowWidth: number) {
    // console.log('onResize', windowWidth);
    if (windowWidth < 1480) {
      this.showSideNav = false;
      this.sideNameMode = 'over';
      this.enableSideNavToggle = true;
    } else {
      this.showSideNav = true;
      this.sideNameMode = 'side';
      this.enableSideNavToggle = false;
    }
  }

  ngOnDestroy() {
    this.resizeSubscription.unsubscribe();
  }
}
