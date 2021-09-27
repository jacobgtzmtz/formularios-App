import { Component } from '@angular/core';

interface IPersona {
  nombre: string;
  favoritos: IFavorito[];
}

interface IFavorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  public persona: IPersona = {
    nombre: 'Jacob',
    favoritos: [
      { id: 1, nombre: 'Juventud en extasis' },
      { id: 2, nombre: 'Un grito desesperado' },
    ],
  };

  public inputJuego: string = '';

  /**
   * guardar
   */
  public guardar() {
    console.log('Formulario posteado');
  }

  /**
   * eliminar
   */
  public eliminar(id: number): void {
    this.persona.favoritos.splice(id, 1);
  }

  // agregar(favorito: IFavorito): void {
  //   console.log(favorito);
  //   this.persona.favoritos.push(favorito);
  // }

  /**
   * agregar
   */
  public agregar(): void {
    const nuevoFavorito: IFavorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.inputJuego,
    };
    this.persona.favoritos.push({ ...nuevoFavorito });
    this.inputJuego = '';
  }
}
