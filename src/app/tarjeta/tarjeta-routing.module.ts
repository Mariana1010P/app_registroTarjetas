import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTarjetaComponent } from './listar-tarjeta/listar-tarjeta.component';
import { AgregarTarjetaComponent } from './agregar-tarjeta/agregar-tarjeta.component';
import { EditarTarjetaComponent } from './editar-tarjeta/editar-tarjeta.component';

const routes: Routes = [
  {
    path:'',component: ListarTarjetaComponent
  },
  {
    path:'agregar-tarjeta',component:AgregarTarjetaComponent
  },
  {
    path: 'editar/:numero', component: EditarTarjetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarjetaRoutingModule { }
