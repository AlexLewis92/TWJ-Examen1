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


  eliminarBorracho(borrachin : BorracheraClass, indice: number) {

    console.log("Indice:", this.borracho.indexOf(borrachin));
    console.log("Indice con index: ", indice);
    console.log("Usuarios : ", this.borracho);
    console.log("Usuariofff : ", borrachin.id);


    this._http.delete("http://localhost:1337/Borrachera?id=" + borrachin.id)
      .subscribe(respuesta => {
          this.borracho.splice(indice, 1);
          let respuestaJson = respuesta.json();
          console.log('respuestaJsonoooooo: ', respuestaJson);
        },
        error => {
          console.log("Error ", error)
        }
      )

  }

}
