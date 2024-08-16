import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Operaciones } from '../../../controllers/operaciones.controller';
import { Numeros } from '../../../models/numeros';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,MatTableModule, MatPaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  displayedColumns: string[] = ['id', 'nombre', 'formula','cantidad', 'PrecioUnitario'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //constructor(private paginator: MatPaginator){}

  //@ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
}
export interface PeriodicElement {
  nombre: string;
  id: number;
  cantidad: number;
  PrecioUnitario: number;
  formula: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nombre: 'Hydrogen', formula: '120ml',cantidad: 1.0079, PrecioUnitario: 3.5},
  {id: 2, nombre: 'Helium', formula: '120ml',cantidad: 4, PrecioUnitario: 3.5},
  {id: 3, nombre: 'Lithium', formula: '120ml',cantidad: 6.941, PrecioUnitario: 3.5},
  {id: 4, nombre: 'Beryllium', formula: '120ml',cantidad: 9.0122, PrecioUnitario: 3.5},
  {id: 5, nombre: 'Boron', formula: '120ml',cantidad: 10.811, PrecioUnitario: 3.5},
];
