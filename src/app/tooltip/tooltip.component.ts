import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  public show = false;
  public mouseCoordinates = { x: 0, y: 0 };

  constructor() { }

  ngOnInit(): void {
  }

  showTooltip() {
    this.show = true
  }

  hideTooltip() {
    this.show = false
  }

  changeMouseCoordinates(x: number, y: number) {
    this.mouseCoordinates = { x, y }
  }
}
