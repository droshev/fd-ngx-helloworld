import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-page2',
  template: `
    <div class="fd-shell">
      <fd-action-bar>
        <fd-action-bar-back>
          <button
            routerLink="/"
            aria-label="back"
            fd-button
            [fdType]="'light'"
            [compact]="true"
            [glyph]="'nav-back'"
          ></button>
        </fd-action-bar-back>
        <fd-action-bar-header>
          <fd-action-bar-title>Hello Page 2</fd-action-bar-title>
        </fd-action-bar-header>
      </fd-action-bar>
      <div class="fd-shell__app"></div>
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
export class Page2Component {}
