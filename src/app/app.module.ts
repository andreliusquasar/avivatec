import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CadastroComponent } from './home/cadastro/cadastro.component';
import { CardInformativoComponent } from './home/card-informativo/card-informativo.component';
import { EmprestimoComponent } from './home/emprestimo/emprestimo.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmprestimoComponent,
    CadastroComponent,
    CardInformativoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
