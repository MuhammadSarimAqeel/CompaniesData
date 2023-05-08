import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Object } from './classes/object';
import { ExperianPayload } from './classes/experian-payload';
import { ObjectExperian } from './classes/obj-experian';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  body!:ExperianPayload
  private apiURL = '/sandbox/v1/token.oauth2';
  private clientID = '4740089e-abe4-4a3f-880d-0055e0a1b84b';
  private clientSecret = '4740089e-abe4-4a3f-880d-0055e0a1b84b';
 
  constructor(private http: HttpClient) { }
  
  getAuthenticationToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic NDc0MDA4OWUtYWJlNC00YTNmLTg4MGQtMDA1NWUwYTFiODRiOk4xTlpIbFhGQkw1MjhLc0pyMmg5OW5KUmRoQlBkSTJTcGhmbzUzSEd4WTFiWHpjMzFNNmxReUpWSzN6SVBHOVY='
    });
    const body = 'grant_type=client_credentials&scope=credit_data_companies';
    return this.http.post('https://login.bisnode.com/sandbox/v1/token.oauth2', body, { headers: headers });
  }

  getCompanyDetails(Obj:Object, token:string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token
    });
    return this.http.post("https://sandbox-api.bisnode.com/credit-data-companies/v2/companies", Obj, { headers: headers });
  }

  getCompanyDetailsExperian(Obj:ObjectExperian, token:string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token
    });
    return this.http.post("/businessinformation/businesses/v1/search", Obj, { headers: headers });
  }

  getAuthenticationTokenExperian(body:ExperianPayload): Observable<any> {
 

    return this.http.post('/oauth2/v1/token',body);
  }

  
}
