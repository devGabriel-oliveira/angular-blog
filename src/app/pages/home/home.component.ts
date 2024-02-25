import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { TitleComponent } from '../../components/menu/title/title.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BigCardComponent,
    TitleComponent,
    MenuBarComponent,
    SmallCardComponent,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
