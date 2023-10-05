import { Component } from '@angular/core';
import { TarjetaService } from '../tarjeta.service';
import { SwalUtils } from 'src/app/utils/swal-utils';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarjeta } from '../tarjeta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-tarjeta',
  templateUrl: './agregar-tarjeta.component.html',
  styleUrls: ['./agregar-tarjeta.component.css']
})
export class AgregarTarjetaComponent {

  tarjetaForm!: FormGroup
  tarjeta: Tarjeta = new Tarjeta()


  constructor(private fb: FormBuilder,
    private router: Router,
    private tarjetaService: TarjetaService) {

  }

  ngOnInit() {
    this.tarjetaForm = this.iniciarFormulario()

  }

  iniciarFormulario(): FormGroup {
    return this.fb.group({
      titular: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      cvv: ['', [Validators.required,Validators.maxLength(3)]]
    })
  }

  onSubmit() {
    if (this.tarjetaForm.valid) {
      console.log('entro')
      this.extractData()
      this.tarjetaService.enviarInformacionTarjeta(this.tarjeta).subscribe((res) => {
        console.log('ponga algo',res);
        this.router.navigateByUrl('dashboard')
        SwalUtils.customMessageOk('OK', 'Se agrego correctamente')
      }, (error) => {
        SwalUtils.customMessageOk('Ops!', 'No se pudo agregar')
        console.log('ponga algo error',error);
      }
      )
      
    }

  }

  extractData() {
    this.tarjeta.titular = this.tarjetaForm.get("titular")?.value
    this.tarjeta.numero = this.tarjetaForm.get("numero")?.value
    this.tarjeta.fecha = this.tarjetaForm.get("fecha")?.value
    this.tarjeta.cvv = this.tarjetaForm.get("cvv")?.value
  }
}
