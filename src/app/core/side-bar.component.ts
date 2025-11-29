import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  display = true;
  isBlack = false;

  constructor() { }

  ngOnInit(): void {
    // Load saved theme preference - dark blue is default
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'black') {
      this.isBlack = true;
      document.body.classList.add('black-theme');
    }
  }

  toggleTheme(): void {
    this.isBlack = !this.isBlack;
    if (this.isBlack) {
      document.body.classList.add('black-theme');
      localStorage.setItem('theme', 'black');
    } else {
      document.body.classList.remove('black-theme');
      localStorage.setItem('theme', 'dark-blue');
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
