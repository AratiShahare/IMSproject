import { Component } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {

  
  constructor(private star:StudentService, private activrout:ActivatedRoute){
     activrout.params.subscribe(param=>this.engid=param)
    this.editData()

   }
  engid: any;

  update=new FormGroup({
    
      // address:new FormControl(),
      // batchCode: new FormControl(),
      // course: new FormControl(),
      // createdOn: new FormControl(),
      // dob: new FormControl(),
      // education: new FormControl(),
      // firstName: new FormControl(),
      // gender: new FormControl(),
      // id: new FormControl(),
      // lastName: new FormControl(),
      // mentorId: new FormControl(),
      // mobile:new FormControl(),
      // passingYear: new FormControl(),
      // updateOn: new FormControl()
    

      active: new FormControl(),
  address:new FormControl(),
  basePackage: new FormControl(),
  batchCode:new FormControl(),
  contractSent: new FormControl(),
  course:new FormControl(),
  createdOn: new FormControl(),
  dob: new FormControl(),
  education:new FormControl(),
  email: new FormControl(),
  firstName: new FormControl(),
  formalContractGenerated: new FormControl(),
  formalContractRecived:new FormControl(),
  gender: new FormControl(),
  id:new FormControl(),
  incomeId:new FormControl(),
  lastName:new FormControl(),
  mentor: new FormControl(),
  mentorId: new FormControl(),
  mentorOpted: new FormControl(),
  mobile: new FormControl(),
  passingYear: new FormControl(),
  password: new FormControl(),
  studentId: new FormControl(),
  tempPassword:new FormControl(),
  updateOn: new FormControl(),    
   })
     

  
  
  editData(){
    this.star.getbyid(this.engid.id).subscribe((res:any)=>this.update.setValue(res))
    console.log(this.engid)
  }
  updatedata(){
    this.star.updateStudEdit(this.update.value).subscribe((res)=>console.log(res))
  }

}
  




