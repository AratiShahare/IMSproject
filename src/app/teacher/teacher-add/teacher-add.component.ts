import { Component } from '@angular/core';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent {

constructor(private teacher:TeacherService){

}
 


}
