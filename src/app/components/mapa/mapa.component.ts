import { Component, OnInit } from '@angular/core';
import { Marcadores } from 'src/app/classes/marcadores.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  marcador: Marcadores[] = [];

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {
    const inicioMarcador = new Marcadores(51.678418, 7.809007);
    this.marcador.push(inicioMarcador);
  }

  ngOnInit() {}
}
