import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortlyApiService {


  constructor(private http: HttpClient) { }

  getShortenUrl(url: string): Observable<any> {
    return this.http.get<any>(`https://api.shrtco.de/v2/shorten?url=${url}`);
  }
}
