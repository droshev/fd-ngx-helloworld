import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  template: `
    <div class="fd-shell">
      <fd-action-bar>
        <fd-action-bar-header>
          <fd-action-bar-title>Hello World!</fd-action-bar-title>
        </fd-action-bar-header>
      </fd-action-bar>
      <div class="fd-shell__app">
        <div class="fd-app">
          <main class="fd-app__main">
            <button fd-button routerLink="/page2">Go to Page 2</button>
          </main>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      fd-action-bar-title {
        display: block;
        text-align: center;
      }
    `
  ]
})
export class Page1Component {}
