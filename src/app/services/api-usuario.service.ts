import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  salvar(usuario: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/usuario', usuario).pipe(
      map(retorno => retorno),
      catchError(erro => throwError(erro))
    )
  }
}
