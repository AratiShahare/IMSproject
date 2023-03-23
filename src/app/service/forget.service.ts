import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {

  constructor(private mac:HttpClient) { }
  baseUrl='http://15.206.171.20:9090';
  forgot(emaiId:any){
    return this.mac.get(`${this.baseUrl}/forgotPwd/${emaiId}`,{responseType:'text'})
  }
}
