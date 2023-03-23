import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {
  constructor(private edi:StudentService){}

  editform=new FormGroup({

  })

  updateedit(){

  }

}
