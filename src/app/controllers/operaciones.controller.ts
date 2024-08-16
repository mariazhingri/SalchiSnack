import { Injectable } from '@angular/core';
import { Numeros } from '../models/numeros';

@Injectable({
  providedIn: 'root',
})
export class Operaciones {
 // private numeros: Numeros[] = [];


  suma(num1: number, num2: number) {
    return num1 + num2;
  }
}