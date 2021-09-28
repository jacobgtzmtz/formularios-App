import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  public miFormulario: FormGroup = this.$formBuilder.group({
    genero: [,Validators.required],
    notificaciones: [false, Validators.required],
    termycond: [false, Validators.requiredTrue]
  })

  public persona ={
    genero: 'F',
    notificaciones: false
  }

  constructor(private $formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //Esta linea funciona solo si todos los campos del objeto coinciden con los del FormGroup
    //this.miFormulario.setValue(this.persona);

    //Esta linea funciona mejor
    //this.miFormulario.reset(this.persona);

    //Esta está mejor optimizada:
    this.miFormulario.reset(
      {
        ...this.persona,
        termycond: false
      }
    )
  }

  /**
   * guardar
   */
  public guardar() {
    const formvalue = {...this.miFormulario.value};
    console.log(formvalue);
  }

}
