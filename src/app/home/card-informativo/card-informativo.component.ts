import { Component, OnInit } from '@angular/core';
import { CardModel } from './../../model/card-model';

@Component({
  selector: 'app-card-informativo',
  templateUrl: './card-informativo.component.html',
  styleUrls: ['./card-informativo.component.scss']
})
export class CardInformativoComponent implements OnInit {

  card: CardModel;

  constructor() { }

  ngOnInit() {
    this.card = {
      imagem: '../../assets/img/img-1.png',
      titulo: 'Título',
      texto: 'Texto de exemplo'
    };
    console.log(this.card);
  }

}
