import { Component, OnInit } from '@angular/core';
import { SwalUtils } from 'src/app/utils/swal-utils';
import { TarjetaService } from '../tarjeta.service';
import { Tarjeta } from '../tarjeta';
import { Contants } from 'src/app/constants/constants';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {

  tarjetas!: Tarjeta[]; 

  constructor(private tarjetaService: TarjetaService) {
  }

  ngOnInit(): void {
    this.getNowPlaying()
  }

  getNowPlaying() {
    this.tarjetaService.getNowPlaying().subscribe((res) => {
      console.log(res);
      if (res?.tarjetas) {
        this.tarjetas = res.tarjetas
        console.log(this.tarjetas);
      } else {
        SwalUtils.customMessageError("Error", "No se encontratron datos")
      }
    }, (error:any) => {
      console.log(error);
      SwalUtils.customMessageError("Error", "Error al consultar los datos")
    })
  }

}
