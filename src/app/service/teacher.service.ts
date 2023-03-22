
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

    constructor( private http:HttpClient ) {

   }
   baseurl="http://13.233.50.4:8080"

   saveTeacher(body:any){
    return this.http.post(`${this.baseurl}/mentor/register`,body)
   }
   listTeacher(){
    return this.http.get(`${this.baseurl}/mentor/all`)
   }

}
