import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bando',
  templateUrl: './bando.component.html',
  styleUrls: ['./bando.component.scss']
})
export class BandoComponent implements OnInit {
  public map: any = { lat: 13.944269, lng: 108.010675 };
  constructor() { }

  ngOnInit() {
  }

}
