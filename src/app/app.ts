import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  juegos = [
    { nombre: 'ROCKET LEAGUE', favorito: false },
    { nombre: 'FORTNITE', favorito: false },
    { nombre: 'MOBILE LEGENDS', favorito: false },
    { nombre: 'VALORANT', favorito: false },
    { nombre: 'VECINO INFERNAL', favorito: false },
    { nombre: 'HOGWARTS LEGACY', favorito: false }
  ];

  marcarFavorito(juego: any) {
    juego.favorito = !juego.favorito;
  }

  eliminarJuego(indice: number) {
    this.juegos.splice(indice, 1);
  }
}
