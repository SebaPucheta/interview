import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { ApiService } from './api.service'
import 'rxjs/add/operator/map'

const USER_KEY: string = 'qhwdgqw'
const KEY: string = 'qhwdfax'

@Injectable()
export class AuthService extends ApiService {
  private storageType: any
  private url = this.baseUrl + '/Users'

  constructor (
    private router: Router,
    private http: HttpClient
  ) {
    super()
  }

  public saveData (token: string, user: string) {
    this.storageType.setItem(KEY, token)
    this.storageType.setItem(USER_KEY, JSON.stringify(user))
  }

  public isLoggedIn (): boolean {
    const user = this.getCurrentUser()
    return !!user
  }

  public login (body: any): Observable<any> {
    this.storageType = localStorage

    return this.http.post(`${this.url}/login`, body)
    .map(resp => {
      const body = resp as any
      this.saveData(body.token, body.userId)
      return body.userId
    })
  }

  public logout () {
    const storage = this.getStorage()
    storage.clear(KEY)
    storage.clear(USER_KEY)

    return this.router.navigate(['login'])
  }

  public getCurrentUser (): any {
    return JSON.parse(localStorage.getItem(USER_KEY))
  }

  public getCurrentToken (): string {
    return this.getStoredValue(KEY)
  }

  private getStoredValue (key: string): string {
    return localStorage.getItem(key)
  }

  private getStorage (): any {
    return localStorage
  }
}
