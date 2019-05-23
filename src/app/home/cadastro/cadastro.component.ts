import { Component, OnInit } from '@angular/core';
import { CadastroServiceService } from './cadastro-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  valores: number[];

  exibeValores = false;

  private arrayAuxiliar: any[];
  
  constructor(private cadastroService: CadastroServiceService) { }

  ngOnInit() {
    this.cadastroService.getValores().subscribe(res => {
      console.log(res);
      this.arrayAuxiliar = res;
      this.valores = res.slice(0, 6);
    });
  }

  outroValor(): void {
    this.exibeValores = !this.exibeValores;

    if (this.exibeValores) {
      this.valores = this.arrayAuxiliar.slice(0);
      console.log(this.valores);
    } else {
      this.valores = this.arrayAuxiliar.slice(0, 6);
      console.log(this.valores);
    }

  }

  

}
