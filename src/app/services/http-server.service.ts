import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private REST_API_SERVER = 'http://localhost:3000';
  private REST_API_SERVER_RANDOM = 'https://randomuser.me/api/?results=';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private HttpClient: HttpClient) { }

  public getComments(): Observable<any>{
    const url = `${this.REST_API_SERVER}/comments`;
    return this.HttpClient.get<any>(url, this.httpOptions);
  }
  public postComments(payload: any): Observable<any>{
    const url = `${this.REST_API_SERVER}/comments`;
    console.log('postComments = url', url);
    console.log('postComments: payload', payload);
    return this.HttpClient.post<any>(url, payload,  this.httpOptions);
  }
  public getRandomUsers(users: number = 1): Observable<any>{
    const url = `${this.REST_API_SERVER_RANDOM}` + users;
    return this.HttpClient.get<any>(url, this.httpOptions);
  }
}
