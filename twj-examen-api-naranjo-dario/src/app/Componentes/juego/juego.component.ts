import {Component, Input, OnInit} from '@angular/core';

import {juegoInterface} from "../../interface/JuegoInterface";
import {Http} from "@angular/http";

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  @Input() juego:juegoInterface;

  constructor( private _http:Http ) { }

  ngOnInit() {
  }

}
