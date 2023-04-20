import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isVisible = false;

  toggleMenu() {
    this.isVisible = !this.isVisible;
  }
}
