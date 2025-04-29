import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UniversidadesService {
  constructor(protected http: HttpClient) {}

  obteneruniversidad(): Observable<any> {
    let ruta = [environment.apiUrl, 'universidad'].join('/');
    return this.http.get(ruta);
  }

  obteneruniversidadId(id: any): Observable<any> {
    let ruta = [environment.apiUrl,'universidad', id].join('/');
    return this.http.get(ruta);
  }
}
