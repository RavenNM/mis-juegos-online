import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  

  juegos = [
    { nombre: 'ROCKET LEAGUE', favorito: false },
    { nombre: 'FORTNITE', favorito: false },
    { nombre: 'MOBILE LEGENDS', favorito: false },
    { nombre: 'VALORANT', favorito: false }
  ];

  nuevoJuego = '';
  
  agregarJuego() {
    if (this.nuevoJuego.trim() !== '') {
      this.juegos.push({
        nombre: this.nuevoJuego.toUpperCase(),
        favorito: false
      });

      this.nuevoJuego = '';
    }
  }

  marcarFavorito(juego: any) {
    juego.favorito = !juego.favorito;
  }

  eliminarJuego(indice: number) {
    this.juegos.splice(indice, 1);
  }
}