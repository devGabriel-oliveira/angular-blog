import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive ],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit{

  @Input()
  photoCover:string =""
  

  @Input()
  descripSmall:string =""

  @Input()
  Id:string = ""



  constructor() {
    
  }

  ngOnInit(): void {
    console.log(this.descripSmall)
    
  }

}
