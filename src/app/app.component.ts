import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './utils/search/search.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, MenuComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-demos';
}
