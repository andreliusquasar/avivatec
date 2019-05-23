import { Component, OnInit } from '@angular/core';
import { CadastroServiceService } from './cadastro-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  valores: number[];

  constructor(private cadastroService: CadastroServiceService) { }

  ngOnInit() {
    this.cadastroService.getValores().subscribe(res => {
      console.log(res);
      this.valores = res.slice(1, 7);
    });
  }

}
