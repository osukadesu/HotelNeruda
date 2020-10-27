import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css']
})
export class ClienteRegistroComponent implements OnInit {
  cliente: Cliente;
  constructor(private clienteService: ClienteService) { }

  ngOnInit(){
    this.cliente = new Cliente();
  }

  add() {
    this.clienteService.post(this.cliente).subscribe(p => {
      if (p != null) {
        alert('se agregó a una persona' + JSON.stringify(this.cliente));
        this.cliente = p;
      }
    });
  }
}
