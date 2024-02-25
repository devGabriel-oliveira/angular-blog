import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit{

  @Input()
  photoCover:string =""
  

  @Input()
  descripSmall:string =""


  constructor() {
    
  }

  ngOnInit(): void {
    console.log(this.descripSmall)
    
  }

}
