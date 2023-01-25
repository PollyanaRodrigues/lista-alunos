import { Component } from '@angular/core';
import { Alunos } from 'src/types/alunos';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent {
  aluno = "";
  media=0;
  
  nota1 = 0;
  nota2 = 0

  aprovado = false;


  alunos: Alunos[] = [
    
  ]

  adicionar(){
    this.media = (this.nota1 + this.nota2)/2

    if(this.media>=7){
      this.aprovado = true;
    }else {
      this.aprovado = false;
    }
    this.alunos.push({nome: this.aluno.toLocaleUpperCase(), media: this.media, aprovado: this.aprovado})
  }
}
