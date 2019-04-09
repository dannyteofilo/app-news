import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    let selector = document.getElementById('wrapper');
    if (this.toggled) {
      selector.classList.remove('toggled');
      this.toggled = !this.toggled
    } else {
      selector.classList.add('toggled');
      this.toggled = !this.toggled

    }
  }
}
