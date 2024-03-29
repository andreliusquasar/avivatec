import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {

  constructor(private http: HttpClient) { }

  getValores(): Observable<any[]> {
    return this.http.get<any[]>('https://apifront.azurewebsites.net/api/front');
  }

  getInfoCardSuperior() {
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

  getInfoCardInferior() {
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
