import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule,MatIconModule,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  isMenuOpen = false;
  showOptions = false;

  // Definir el EventEmitter con el tipo boolean
  @Output() menuToggle = new EventEmitter<boolean>();


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Emitir un evento para notificar al componente padre(app.component) que el menú se ha abierto o cerrado
    this.menuToggle.emit(this.isMenuOpen);
  }

  mostrarOpcionesInicio() {
    const opcionesElement = document.getElementById('opciones');
    opcionesElement?.classList.toggle('active');
    // if (opcionesElement) {
    //     opcionesElement.classList.toggle('active');
    // }
  }
  mostrarOpcionesCompras() {
    const opcionesElement = document.getElementById('opciones-compras');
    opcionesElement?.classList.toggle('active');
  }

}
