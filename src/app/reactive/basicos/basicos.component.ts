import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Bicicleta'),
  //   precio: new FormControl(12550),
  //   existencias: new FormControl(35),
  // });

  miFormulario: FormGroup = this.$fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [,  [Validators.required, Validators.min(0)] ],
    existencias: [,  [Validators.required, Validators.min(0)] ]
  })


  constructor(private $fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Laptop',
      precio: 14500
    })
  }



  /**
   * campoNoEsValido
   */
  public campoNoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched == true
  }

  /**
   * guardar
 :void  */
  public guardar():void {
    this.miFormulario.markAllAsTouched();
    if(this.miFormulario.invalid) {
      return;
    }
  console.log(this.miFormulario.value);
  this.miFormulario.reset();
  }
}
