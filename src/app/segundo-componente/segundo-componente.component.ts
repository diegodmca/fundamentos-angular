import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent{
  
  nome = "Joao";
  dataNascimento = "1956-08-26";
  urlImagem = "/assets/joao.jpeg";

  mostrarData(){
    alert(`A data de nascimento do João é: ${this.dataNascimento} `);
  }
}
