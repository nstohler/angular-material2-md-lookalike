import { browser, by, element } from 'protractor';

export class AngularMaterial2MdLookalikePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
