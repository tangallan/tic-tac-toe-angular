import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button [disabled]="disableSquare" nbButton *ngIf="!value" >{{value}}</button>
    <button [disabled]="disableSquare" nbButton hero status="success" *ngIf="value === 'X'" >{{value}}</button>
    <button [disabled]="disableSquare" nbButton hero status="info" *ngIf="value === 'O'" >{{value}}</button>

  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }'
  ]
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

  @Input() disableSquare = false;

  constructor() {
  }

}


// <script src="//code.tidio.co/0tpneyvbrvge9kcjgr2uvq6y2bnb8hzl.js" async></script>
