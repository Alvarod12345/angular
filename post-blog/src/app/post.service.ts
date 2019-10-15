import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(public _httpCliente: HttpClient) { }


  getPost(): Observable<any> {

    const Url = "https://jsonplaceholder.typicode.com/posts";

    return this._httpCliente.get(Url, this.httpOptions);

  }


}
