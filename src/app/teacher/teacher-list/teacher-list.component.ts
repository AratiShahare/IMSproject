import { Component } from '@angular/core';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent {
constructor(private teacher:TeacherService){
  this.listTeacherData()
}
 

 teach:any
listTeacherData(){
this.teacher.listTeacher().subscribe(res=>console.log(this.teach=res))
}
}
