import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteRegistroComponent } from './hotel/cliente/cliente-registro/cliente-registro.component';
import { ClienteConsultaComponent } from './hotel/cliente/cliente-consulta/cliente-consulta.component';
import { AdministracionComponent } from './hotel/administracion/administracion.component';
import { LoginComponent } from './login/login.component';
import { HabitacionRegistroComponent } from './hotel/habitacion/habitacion-registro/habitacion-registro.component';
import { FacturaRegistroComponent } from './hotel/factura/factura-registro/factura-registro.component';
import { EmpleadoRegistroComponent } from './hotel/empleado/empleado-registro/empleado-registro.component';
import { ClienteGestionComponent } from './hotel/cliente/cliente-gestion/cliente-gestion.component';
import { EmpleadoGestionComponent } from './hotel/empleado/empleado-gestion/empleado-gestion.component';
import { FacturaGestionComponent } from './hotel/factura/factura-gestion/factura-gestion.component';
import { HabitacionGestionComponent } from './hotel/habitacion/habitacion-gestion/habitacion-gestion.component';
import { EmpleadoConsultaComponent } from './hotel/empleado/empleado-consulta/empleado-consulta.component';
import { HabitacionConsultaComponent } from './hotel/habitacion/habitacion-consulta/habitacion-consulta.component';
import { FacturaConsultaComponent } from './hotel/factura/factura-consulta/factura-consulta.component';
import { RegistroComponent } from './login/registro/registro.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'administracion', component: AdministracionComponent },
  { path: 'clienteregistro', component: ClienteRegistroComponent },
  { path: 'clienteconsulta', component: ClienteConsultaComponent },
  { path: 'login', component: LoginComponent},
  { path: 'gestioncliente', component: ClienteGestionComponent },
  { path: 'gestionempleado', component: EmpleadoGestionComponent },
  { path: 'gestionfactura', component: FacturaGestionComponent },
  { path: 'gestionhabitacion', component: HabitacionGestionComponent },
  { path: 'habitacionregistro', component: HabitacionRegistroComponent },
  { path: 'habitacionconsulta', component: HabitacionConsultaComponent },
  { path: 'facturaregistro', component: FacturaRegistroComponent },
  { path: 'facturaconsulta', component: FacturaConsultaComponent },
  { path: 'empleadoregistro', component: EmpleadoRegistroComponent },
  { path: 'empleadoconsulta', component: EmpleadoConsultaComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }