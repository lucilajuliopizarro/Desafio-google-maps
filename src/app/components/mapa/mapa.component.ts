import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcadores.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {
    const nuevoMarcadores = new Marcador(51.678418, 7.809007);
    this.marcadores.push(nuevoMarcadores);
  }

  ngOnInit() {}
  agregarMarcador(evento) {
    const coords: { lat: number; lng: number } = evento.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
  }
}
