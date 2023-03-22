import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { FormControl, FormGroup } from '@angular/forms';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent {
  constructor(){}

constructor(private teacher:TeacherService){

}
 
teacherForm=new FormGroup({
  "address": new FormControl(),
  "batchCode": new FormControl(),
  "contactNo": new FormControl(),
  "dateOfJoining": new FormControl(),
  "dob": new FormControl(),
  "experience": new FormControl(),
  "firstName": new FormControl(),
  "gender": new FormControl(),
  "lastName": new FormControl(),
  "mentorEmail":new FormControl(),
  "mentorId": new FormControl(),
  "password": new FormControl(),
  "qualification":new FormControl()
})

saveTeacherData(){
    this.teacher.saveTeacher(this.teacherForm.value).subscribe(res=>console.log(res))
}

}
