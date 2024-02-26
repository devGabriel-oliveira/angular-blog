import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { dataFake } from '../../data/dataFake';


@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HomeComponent,

  ],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent implements OnInit {  

  photo:string = ""
  title:string = ""
  description:string = ""

private id: string = "0"


  constructor(private route: ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get("id") || "";
    });

    this.setValuesToComponent(this.id)

 } 

 setValuesToComponent(id:string | null){
  const result = dataFake.filter(article => article.id == id)[0]

  this.title = result.titulo
  this.description = result.descricao
  this.photo = result.photoCover

 }

}
