import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  public initForm = {
    producto: 'abc',
    precio: 0,
    existencias: 10
  }

  constructor() {}

  ngOnInit(): void {}

  /**
   * guardar
   */
  public guardar() {
    console.log(this.miFormulario.value);
    this.miFormulario.resetForm(this.initForm);
  }

  /**
   * nombreEsValido
  miFormulario.controls.producto?.invalid &&*/
  public nombreNoEsValido(): boolean {
    return (
      this.miFormulario?.controls.producto?.invalid &&
      this.miFormulario?.controls.producto?.touched
    );
  }

  /**
   * precioNoEsValido
   */
  public precioNoEsValido(): boolean {
    return this.miFormulario?.controls.precio?.touched &&
     this.miFormulario?.controls.precio?.value < 0;
  }
}
