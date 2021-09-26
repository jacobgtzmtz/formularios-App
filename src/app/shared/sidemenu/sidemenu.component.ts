import { Component } from '@angular/core';

interface IMenuItem {
  nombre: string;
  url: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [],
})
export class SidemenuComponent {
  menusList: IMenuItem[] = [
    { nombre: 'Básicos', url: './template/basicos' },
    { nombre: 'Dinámicos', url: './template/dinamicos' },
    { nombre: 'switches', url: './template/switches' },
  ];

  reactiveMenusList: IMenuItem[] = [
    { nombre: 'Básicos', url: './reactive/basicos' },
    { nombre: 'Dinámicos', url: './reactive/dinamicos' },
    { nombre: 'switches', url: './reactive/switches' },
  ];
}

