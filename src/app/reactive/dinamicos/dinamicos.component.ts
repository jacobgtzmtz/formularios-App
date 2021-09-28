import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  NgModel,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  public nuevoLibro: FormControl = this.$fb.control('', Validators.required);

  public miFormulario: FormGroup = this.$fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.$fb.array(
      [
        ['Juventud en extasis', Validators.required],
        ['Un grito desesperado', Validators.required],
      ],
      Validators.required
    ),
  });

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }
  constructor(private $fb: FormBuilder) {}

  ngOnInit(): void {}

  /**
   * agregar
   */
  public agregar() {
    if (this.nuevoLibro.invalid) {
      return;
    }
    //Esta linea funciona
    // this.favoritosArr.push(new FormControl(this.nuevoLibro.value, Validators.required));

    //Esta es la manera de hacerlo con formbuilder
    this.favoritosArr.push(
      this.$fb.control(this.nuevoLibro.value, Validators.required)
    );
    this.nuevoLibro.reset();
  }

  /**
   * campoNoEsValido
   */
  public campoNoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  /**
   * eliminar
   */
  public eliminar(index: number) {
    //Esta linea funciona
    // this.favoritosArr.controls.splice(index, 1);
    //Esta esta mejor optimizada
    this.favoritosArr.removeAt(index);
  }

  /**
   * guardar
   */
  public guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }
}
