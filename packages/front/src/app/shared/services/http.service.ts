import { RequestOptions, Response, Request, RequestOptionsArgs, Headers } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http"

@Injectable()
export class AppHttpService {

  constructor(
    private http: HttpClient
  ) {
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<any> {
    return this.request(url, this.getHeader(options))
  }

  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    return this.http.get(url, this.getHeader(options))
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    return this.http.post(url, body, this.getHeader(options))
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    return this.http.put(url, body, this.getHeader(options))
  }

  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    return this.http.patch(url, body, this.getHeader(options))
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<any> {
    return this.http.delete(url, this.getHeader(options))
  }

  private getHeader(option) {
    if (!option) {
      option = new RequestOptions()
    }
    option.headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8',
      //'Authorization': `Bearer ${this.authService.getCurrentToken()}`
    })
    return option
  }
}
