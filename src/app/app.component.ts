import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BigCardComponent } from './components/big-card/big-card.component';
import { TitleComponent } from './components/menu/title/title.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    BigCardComponent,
    TitleComponent,
    MenuBarComponent,
    SmallCardComponent,
    FormsModule,
    HomeComponent

  
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
