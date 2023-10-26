import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.css']
})
export class ThemeTogglerComponent {

  isThemeSelected: boolean = false;
  selectedTheme: string = '';

  toggleTheme() {
    this.isThemeSelected = !this.isThemeSelected;
  }

  selectTheme(themeColor: string) {
    this.selectedTheme = themeColor;
    document.documentElement.style.setProperty('--theme-color', this.selectedTheme);
  }
}
