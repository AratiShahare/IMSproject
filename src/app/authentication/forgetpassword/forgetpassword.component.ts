import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ForgetService } from 'src/app/service/forget.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
constructor (private sam: ForgetService){}

forgetForm=new FormGroup({
  email:new FormControl('')
})
email:any;
out(){
  this.sam.forgot(this.email).subscribe(response=>console.log(response))
}
}
