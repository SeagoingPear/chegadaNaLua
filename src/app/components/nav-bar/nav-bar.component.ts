import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  darkMode = false;
  stateMenu = false;
  stateMenuIcon = 'assets/icons/menu.svg';

  constructor() { }

  ngOnInit(): void {
  }

  exibirMenu() {
    if(this.stateMenu == false) {
      this.stateMenu = true;
      this.stateMenuIcon = 'assets/icons/arrowLeftBox.svg';
    } else {
      this.stateMenu = false;
      this.stateMenuIcon = 'assets/icons/menu.svg';
    }
  }
}
