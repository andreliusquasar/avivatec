import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { BannerComponent } from './home/banner/banner.component';
import { CadastroComponent } from './home/cadastro/cadastro.component';
import { CardInformativoComponent } from './home/card-informativo/card-informativo.component';
import { EmprestimoComponent } from './home/emprestimo/emprestimo.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmprestimoComponent,
    CadastroComponent,
    CardInformativoComponent,
    BannerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
