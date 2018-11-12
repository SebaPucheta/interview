import { Injectable } from '@angular/core'
import { Response } from '@angular/http'
import { Observable, Subject } from 'rxjs'
import { ApiService } from './api.service'
import 'rxjs/add/operator/map'
import { HttpClient } from "@angular/common/http"
import { WebsocketService } from '../../websocket.service';

@Injectable()
export class CountryService extends ApiService {
  private url = `${this.baseUrl}/countries`
  messages: Subject<any>;
  
  constructor (
    private wsService: WebsocketService,
    private http: HttpClient
  ) {
    super()
    this.messages = <Subject<any>>wsService
      .connect()
      .map((response: any): any => {
        console.log('webService', response)
        return response;
      })
  }

  public search (): Observable<any> {
    return this.http.get(this.url)
  }

  public getById (id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`)
  }

  public create (object: any): Observable<any> {
    return this.http.post(this.url, object)
  }

  public update (id: string, object: any): Observable<any> {
    return this.http.patch(`${this.url}/${id}`, object)
  }

  public remove (id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`)
  }
}
