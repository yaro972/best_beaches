import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
