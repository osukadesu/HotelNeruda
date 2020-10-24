import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css']
})
export class ClienteRegistroComponent implements OnInit {

  cliente: Cliente;
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cliente = new Cliente;
  }
  
  add() {
    alert('se agregó a un nuevo cliente' + JSON.stringify(this.cliente));
    this.clienteService.post(this.cliente).subscribe(p => {
      if (p != null) {
        alert('Persona creada!');
        this.cliente = p;
      }
      else
      {
        alert('Casillas vacias!');
      }
    });
  }
}
