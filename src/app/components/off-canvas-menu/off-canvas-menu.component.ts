import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-off-canvas-menu',
  templateUrl: './off-canvas-menu.component.html',
  styleUrls: ['./off-canvas-menu.component.css']
})
export class OffCanvasMenuComponent implements OnInit {

  darkMode = false;

  constructor() { }

  ngOnInit(): void {
  }

}
