import { Component } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  constructor(private lis:StudentService){this.getallstudList()}
  
  studentList:any

  getallstudList(){
        this.lis.getallstudList().subscribe(res=>this.studentList=res)
  }
}
