import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }
  getResponse():Observable<any>{
    return this.http.get<Location[]>(`http://localhost:4444/sala/obtener-todas`);
  }
}

