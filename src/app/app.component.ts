import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeu de mots';

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  getCurrentYear(): number {
    const now = new Date();
    return now.getFullYear();
  }
}
