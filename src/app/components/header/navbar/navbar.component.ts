import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbar = {
    home: 'HOME',
    chisiamo: 'DR. RUSSO',
    trattamenti: 'TRATTAMENTI',
    contatti: 'CONTATTI'
  }
}
