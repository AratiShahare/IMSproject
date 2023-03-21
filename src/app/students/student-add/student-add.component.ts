import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
   constructor(private ser:StudentService){}
  


   addstudform=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    gender:new FormControl(),
    address:new FormControl(),
    dob:new FormControl(),
    mobile:new FormControl(),
    course:new FormControl(),
    education:new FormControl(),
    passingYear:new FormControl(),
    email:new FormControl()

   })

   regpost(){
     this.ser.savestudentReg(this.addstudform.value).subscribe((res)=>
     console.log(res))
   }
}
