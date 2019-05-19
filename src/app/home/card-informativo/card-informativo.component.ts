import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from './../../model/card-model';

@Component({
  selector: 'app-card-informativo',
  templateUrl: './card-informativo.component.html',
  styleUrls: ['./card-informativo.component.scss']
})
export class CardInformativoComponent implements OnInit {

  @Input()
  card: CardModel;

  @Input()
  cor: string;

  @Input()
  tamanhoImagem: string;

  constructor() { }

  ngOnInit() {
 
    console.log(this.card, this.cor);
    console.log(this.tamanhoImagem);
  }

}
