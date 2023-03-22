import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }


   savestudentReg(body:any){
    return this.http.post(`http://13.233.50.4:8080/student/register`,body)
   }

   getallstudList(){
     return this.http.get(`http://13.233.50.4:8080/student/all`)
   }

 
   deleteStudList(id:number){
    return this.http.delete(`http://13.233.50.4:8080/student/${id}`)
   }

   updateStudEdit(body:any){
    return this.http.put(`http://13.233.50.4:8080/student/updateStudent`,body)
   }
}
