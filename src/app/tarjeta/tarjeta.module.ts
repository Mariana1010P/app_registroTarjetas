import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetaRoutingModule } from './tarjeta-routing.module';
import { AgregarTarjetaComponent } from './agregar-tarjeta/agregar-tarjeta.component';
import { BuscarTarjetaComponent } from './buscar-tarjeta/buscar-tarjeta.component';
import { ListarTarjetaComponent } from './listar-tarjeta/listar-tarjeta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarTarjetaComponent } from './editar-tarjeta/editar-tarjeta.component';


@NgModule({
  declarations: [
    AgregarTarjetaComponent,
    BuscarTarjetaComponent,
    ListarTarjetaComponent,
    EditarTarjetaComponent
  ],
  imports: [
    CommonModule,
    TarjetaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TarjetaModule { }
