import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UIButtonComponent implements OnInit {

  @Input() typeBtn: 'solid-primary' | 'outline-primary' | 'outline-secondary' = 'solid-primary'

  @Input() textBtn: string = 'texto';

  constructor() { }

  ngOnInit(): void {
  }

}
