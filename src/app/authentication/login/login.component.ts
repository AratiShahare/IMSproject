import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private rt:LoginService){
    this.ashu()
  }
  data:any
  ash=new FormGroup({
    email:new FormControl(''),
    pwd:new FormControl('')
  })
  ashu(){
this.rt.postfun(this.ash.value).subscribe(Response=>console.log(Response))
  }

}
