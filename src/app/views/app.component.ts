import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

//componentes
import { HomeComponent } from "../shared/components/home/home.component";
import { MenuComponent } from "../shared/menu/menu/menu.component";
import { AgendaComponent } from '../shared/components/agenda/agenda.component';
import { NavComponent } from "../shared/menu/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatPaginator,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,

    //componentes
    HomeComponent,
    MenuComponent,
    AgendaComponent,
    NavComponent
],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SalchiSnack';
  isMenuOpen = false;

  onMenuToggle(isOpen: boolean) {
    this.isMenuOpen = isOpen;
  }
}
