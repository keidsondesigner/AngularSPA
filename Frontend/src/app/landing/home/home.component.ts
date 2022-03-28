import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public contadorClique: number = 0;
  public nome: string = '';
  public urlImage: string =
    'https://angular.io/assets/images/logos/angular/angular.svg';

  addClique() {
    this.contadorClique++;
  }

  zerarContador() {
    this.contadorClique = 0;
  }

  keyup(event: any) {
    this.nome = event.target.value;
  }
}
