import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  display = true;
  isDarkBlue = false;

  constructor() { }

  ngOnInit(): void {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-blue') {
      this.isDarkBlue = true;
      document.body.classList.add('dark-blue-theme');
    }
  }

  toggleTheme(): void {
    this.isDarkBlue = !this.isDarkBlue;
    if (this.isDarkBlue) {
      document.body.classList.add('dark-blue-theme');
      localStorage.setItem('theme', 'dark-blue');
    } else {
      document.body.classList.remove('dark-blue-theme');
      localStorage.setItem('theme', 'black');
    }
  }

  hamburg(): void {
    let navbar = document.querySelector<HTMLElement>(".dropdown");
    if (navbar) {
      navbar.style.transform = "translateY(0px)";
    }
  }

  cancel(): void {
    const navbar = document.querySelector<HTMLElement>(".dropdown");
    if (navbar) {
      navbar.style.transform = "translateY(-500px)";
    }
  }

}
