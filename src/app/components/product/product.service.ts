import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly baseUrl = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMenssage(menssage: string, isErro: boolean = false): void {
    this.snackBar.open(menssage, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isErro ? ['msg-error'] : ['msg-sucess']
    }); 
  }

  // Anotacao <generises>
  create(product: Product): Observable<Product> {
      return this.http.post<Product>(this.baseUrl, product)
      .pipe(
        map(obj => obj),
        catchError((error) => this.errorHandler(error))
      )
  } 

  errorName(error) {
    throw new Error(error);
  }

  errorHandler(e: any): Observable<any> {
    this.showMenssage('Ocorreu um erro!', true);
    this.errorName(e.name);
    return EMPTY;
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
    .pipe(
      map(obj => obj),
      catchError((error) => this.errorHandler(error))
    )
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product)
    .pipe(
      map(obj => obj),
      catchError((error) => this.errorHandler(error))
    )
  }

  delete(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url)
    .pipe(
      map(obj => obj),
      catchError((error) => this.errorHandler(error))
    )
  } 
}
