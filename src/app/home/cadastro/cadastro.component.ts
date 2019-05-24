import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CadastroServiceService } from './cadastro-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  valores: number[];

  exibeValores = false;

  formalizaEmprestimo = false;

  valorSelecionado: number;

  private arrayAuxiliar: any[];

  constructor(private cadastroService: CadastroServiceService,
    private fb: FormBuilder) { }

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
    } else {
      this.valores = this.arrayAuxiliar.slice(0, 6);
    }
  }

  selecionarValor(valor: number) {
    this.valorSelecionado = valor;
    this.formalizaEmprestimo = !this.formalizaEmprestimo;
  }

  cadastroSubmetido(): void {
    this.formalizaEmprestimo = !this.formalizaEmprestimo;
    this.outroValor();
  }

}
