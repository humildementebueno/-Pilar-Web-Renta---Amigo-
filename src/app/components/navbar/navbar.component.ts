import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para el soporte de directivas básicas

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], // Asegúrate de importar módulos necesarios
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'] // Cambiado a "styleUrls" (en plural)
})
export class NavbarComponent {
}
