export class Marcador {
  public lat: number;
  public lng: number;

  public titulo = 'sin tienda';
  public desc = 'sin descripción';

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}
