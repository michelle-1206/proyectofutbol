import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Usuarios } from './vistas/usuarios/usuarios';
import { Partidos } from './vistas/partidos/partidos';
import { Estadisticas } from './vistas/estadisticas/estadisticas';
import { TablaDePosiciones } from './vistas/tabla-de-posiciones/tabla-de-posiciones';
import { Arbitros } from './vistas/arbitros/arbitros';

export const routes: Routes = [
    {path:'usuarios', component: Usuarios},
    {path:'partidos', component: Partidos},
    {path:'estadisticas', component: Estadisticas},
    {path:'tabla-de-posiciones', component: TablaDePosiciones},
    {path:'arbitros', component: Arbitros},
    









];



