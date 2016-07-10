export class Angular2TodoAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-todo-app-app h1')).getText();
  }
}
