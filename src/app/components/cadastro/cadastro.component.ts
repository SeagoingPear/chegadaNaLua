import { ApiUsuarioService } from './../../services/api-usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  darkMode = false

  email = ''
  nome = ''
  sobrenome = ''
  senha = ''

  constructor(
    private userService: ApiUsuarioService
  ) { }

  ngOnInit(): void {
  }

  salvar(){
    let u = {
      email: this.email,
      nome: `${this.nome} ${this.sobrenome}`,
      senha: this.senha,
    }

    this.userService.salvar(u).subscribe(
      (dados) => {
        console.log(dados)
      },
      (erro) => {
        console.error(erro)
      }
    );
  }

}
