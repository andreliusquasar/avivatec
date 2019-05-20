import { Component, OnInit } from '@angular/core';
import { TamanhoImagem } from '../model/imagem-model';
import { CardModel } from './../model/card-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardSuperior: CardModel[];

  cardInferior: CardModel[];

  tamanhoImagem: TamanhoImagem;

  constructor() { }

  ngOnInit() {
    this.cardSuperior = this.getInfoCardSuperior();
    this.cardInferior = this.getInfoCardInferior();

    this.tamanhoImagem = {
      width: '40px',
      height: '40px'
    };
  }

  private getInfoCardSuperior() {
    return [
      {
        imagem: '../../assets/img/img-numero-1.png',
        titulo: 'Bora começar!',
        texto: 'Primeiro você vai nos dizer de quanto precisa nos contar um pouco sobre você.',
        corTexto: 'branco'
      },
      {
        imagem: '../../assets/img/img-numero-2.png',
        titulo: 'É bem rápido!',
        texto: 'Depois que você enviar seu pedido de empréstimo, sem sair da tela e em poucos minutos, receberá uma resposta.',
        corTexto: 'branco'
      },
      {
        imagem: '../../assets/img/img-numero-3.png',
        titulo: 'Dê o aceite e pronto!',
        texto: 'Assim que receber a aprovação final, assine o contrato e logo mais tenha o dinheiro na mão.',
        corTexto: 'branco'
      }
    ];
  }

  private getInfoCardInferior() {
    return [
      {
        imagem: '../../assets/img/img-valor.png',
        titulo: 'Vantagem 01',
        texto: 'Lorem ipsum dolor sit amet, consectetur adpiscing elit. Proin fringilla, risus vel blandit.',
        corTexto: 'black'
      },
      {
        imagem: '../../assets/img/img-valor.png',
        titulo: 'Vantagem 01',
        texto: 'Lorem ipsum dolor sit amet, consectetur adpiscing elit. Proin fringilla, risus vel blandit.',
        corTexto: 'black'
      },
      {
        imagem: '../../assets/img/img-valor.png',
        titulo: 'Vantagem 01',
        texto: 'Lorem ipsum dolor sit amet, consectetur adpiscing elit. Proin fringilla, risus vel blandit.',
        corTexto: 'black'
      }
    ];
  }



}
