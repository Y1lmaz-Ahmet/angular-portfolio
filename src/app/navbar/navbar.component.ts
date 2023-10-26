import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // toggle hamburger icon when VW => tablet & mobile
  isNavbarActive:boolean = false
  toggleMenu(){
    this.isNavbarActive = !this.isNavbarActive
  }
}
