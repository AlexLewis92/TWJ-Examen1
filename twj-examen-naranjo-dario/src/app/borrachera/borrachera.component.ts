import {Component, Input, OnInit} from '@angular/core';
import {BorracheraClass} from "../Clases/BorracheraClass";
import {Http} from "@angular/http";

@Component({
  selector: 'app-borrachera',
  templateUrl: './borrachera.component.html',
  styleUrls: ['./borrachera.component.css']
})
export class BorracheraComponent implements OnInit {

  nuevoBorracho: BorracheraClass = new BorracheraClass();
  borracho: BorracheraClass[]= [];

  constructor( private _http: Http) { }

  ngOnInit() {

    console.log( 'Nueva Bodega', this.nuevoBorracho );

    this._http.get('http://localhost:1337/Borrachera')
      .subscribe(
        respuesta => {
          const rjson: BorracheraClass[] = respuesta.json();
          this.borracho = rjson;
          console.log('Usuarios', this.borracho);
        },
        error => {
          console.log('Error', error);
        }
      );


  }

  crearBorracho(){

    console.log("Entro a crear bodega");
    this._http.post('http://localhost:1337/Borrachera/', this.nuevoBorracho)
      .subscribe(
        respuesta => {

          let borrachoAgregada;
          borrachoAgregada = respuesta.json();

          this.borracho.push(borrachoAgregada);
          this.nuevoBorracho = {};


        },
        error => {
          console.log('Error', error);
        }
      );
  }
}
