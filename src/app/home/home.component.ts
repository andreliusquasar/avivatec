import { Component, OnInit } from '@angular/core';
import { TamanhoImagem } from '../model/imagem-model';
import { CardModel } from './../model/card-model';
import { CadastroServiceService } from './cadastro/cadastro-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardSuperior: CardModel[];

  cardInferior: CardModel[];

  tamanhoImagem: TamanhoImagem;

  constructor(private cadastroServiceService: CadastroServiceService) { }

  ngOnInit() {
    this.cardSuperior = this.cadastroServiceService.getInfoCardSuperior();
    this.cardInferior = this.cadastroServiceService.getInfoCardInferior();

    this.tamanhoImagem = {
      width: '40px',
      height: '40px'
    };
  }
}
