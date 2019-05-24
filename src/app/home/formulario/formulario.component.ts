import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Input()
  valorEscolhido: number;

  @Output()
  cadastroRealizado = new EventEmitter();

  form: FormGroup;

  formularioSubmetido = false;

  modalActions = new EventEmitter<string | MaterializeAction>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit(): void {
    this.formularioSubmetido = true;
    if (this.form.status) {
      this.form.get('valor').setValue(this.valorEscolhido);
      localStorage.setItem('emprestimo', JSON.stringify(this.form.value));
      this.openModal();
    }
  }

  openModal() {
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }

  closeModal() {
    this.cadastroRealizado.emit();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      comentario: ['', Validators.required],
      valor: ['']
    });
  }

}
