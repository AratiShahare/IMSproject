import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private harsha:HttpClient) { }
  baseUrl = "http://15.206.171.20;9090";
  postfun(body:any){
    return this.harsha.post(`${this.baseUrl}/login`,body,{responseType:'text'})
  }
}
