import { Response, RequestOptions } from '@angular/http'
import { environment } from '../../../environments/environment'

export abstract class ApiService {
  protected baseUrl = environment.API_URL
}