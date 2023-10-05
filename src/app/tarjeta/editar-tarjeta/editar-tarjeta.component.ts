import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarjetaService } from '../tarjeta.service';
import { SwalUtils } from 'src/app/utils/swal-utils';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tarjeta } from '../tarjeta';

@Component({
  selector: 'app-editar-tarjeta',
  templateUrl: './editar-tarjeta.component.html',
  styleUrls: ['./editar-tarjeta.component.css']
})
export class EditarTarjetaComponent implements OnInit{

  getNumber: any = "";
  tarjetaForm!: FormGroup;
  tarjeta: Tarjeta; // Declara la variable para la tarjeta

  constructor(
    private fb: FormBuilder,
    private tarjetaService: TarjetaService) {
    this.tarjeta = new Tarjeta(); // Inicializa la tarjeta con valores vacíos
  }

  ngOnInit() {
    this.tarjetaService.getTarjetaByNumero(this.getNumber).subscribe(
      (tarjeta: Tarjeta) => {    
        this.tarjeta = tarjeta; 
        this.inicializarFormulario(); 
      },
      (error) => {
        SwalUtils.customMessageError('Error', 'Error al obtener la tarjeta');
        console.log(error);
      }
    );
  }

  
  inicializarFormulario() {
    if (this.tarjeta) {
      this.tarjetaForm = this.fb.group({
        titular: this.tarjeta.titular,
        numero: this.tarjeta.numero,
        fecha: this.tarjeta.fecha,
        cvv: this.tarjeta.cvv
      });
    } else {
      console.error('this.tarjeta es undefined. No se pudo inicializar el formulario.');
    }
  }
  
  
}
