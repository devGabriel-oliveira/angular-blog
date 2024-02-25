import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input()

  photoCover:string = "https://s3.eu-west-1.amazonaws.com/redsys-prod/articles/69a73aaa7784b829b85889ba/images/teaserImage_xx_Shutterstock2344189953_1699613626490.png"

  @Input()
  cardTitle:string= "NOVA VERSÃO ANGULAR 17"

  @Input()
  cardDescription:string = "Finalmente conseguimos! A versão estável do Angular 17 foi lançada. Parece que a equipe de desenvolvimento Angular tem como objetivo nos surpreender a cada novo lançamento, e a versão 17 não é exceção. Novas funcionalidades e melhorias significativas estão sendo introduzidas.Olhando para o que recebemos, é seguro dizer que muita ênfase foi colocada na otimização, especialmente quando se trata do tamanho inicial do pacote. Também recebemos um novo fluxo de controle, uma base sólida para que os sinais se tornem padrão em versões futuras.Vamos mergulhar no que a versão 17 do Angular traz e todos os benefícios que suas mudanças oferecem. -Desenvolvedor sobre a nova versão do Angular"

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
