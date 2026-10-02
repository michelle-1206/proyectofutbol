import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';



export interface Arbitros {
  id: number;
  nombre: string;
  edad: number;
  experiencia: number;
}

const ARBITROS_DATA: Arbitros[] = [
  {id: 1, nombre: 'Carlos Rodríguez', edad: 35, experiencia: 10},
  {id: 2, nombre: 'Juan Pérez', edad: 32, experiencia: 8},
  {id: 3, nombre: 'Andrés Martínez', edad: 40, experiencia: 15},
  {id: 4, nombre: 'Luis Gómez', edad: 29, experiencia: 6},
  {id: 5, nombre: 'Daniel Torres', edad: 37, experiencia: 12},
  {id: 6, nombre: 'Miguel Sánchez', edad: 34, experiencia: 9},
  {id: 7, nombre: 'Sebastián López', edad: 31, experiencia: 7},
  {id: 8, nombre: 'Felipe García', edad: 42, experiencia: 18},
  {id: 9, nombre: 'Jorge Ramírez', edad: 36, experiencia: 11},
  {id: 10, nombre: 'Mateo Castillo', edad: 28, experiencia: 5}
];

@Component({
  imports: [MatTableModule],
  selector: 'app-tabla',
  styleUrl: './tabla.css',
  templateUrl: './tabla.html',
})

export class Tabla {displayedColumns: string[] = ['nombre', 'id', 'edad', 'experiencia'];
 datos = ARBITROS_DATA;}