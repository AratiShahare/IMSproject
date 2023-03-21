import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent {

  constructor(private servi:StudentService){}


  viewForm=new FormGroup({
    currentPassword: new FormControl(),
    email:new FormControl(),
    newPassword:new FormControl(),
  })


}
