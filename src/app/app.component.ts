import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appNews';
  toggled: boolean = false;
  constructor() {

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
