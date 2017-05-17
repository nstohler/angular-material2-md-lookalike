import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { EventManager } from '@angular/platform-browser';

@Injectable()
export class ResizeService {
  // http://stackoverflow.com/a/43833815/54159
  get currentWindowWidth(): number {
    return window.innerWidth;
  }

  get onResize$(): Observable<Window> {
    return this.resizeSubject.asObservable();
  }

  private resizeSubject: ReplaySubject<Window>;

  constructor(private eventManager: EventManager) {
    this.resizeSubject = new ReplaySubject();
    this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
  }

  private onResize(event: UIEvent) {
    this.resizeSubject.next(<Window>event.target);
  }
}
