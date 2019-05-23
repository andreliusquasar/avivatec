import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {

  constructor(private http: HttpClient) { }

  getValores(): Observable<any[]> {
    return this.http.get<any[]>('https://apifront.azurewebsites.net/api/front');
  }
}
