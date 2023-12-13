import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import{Route, Router} from '@angular/router'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  // loginForm=new FormGroup({
  //  email:new FormControl('abc'),
  //  password:new FormControl('')
  // })

  responseText=''
  alertClass=''
  constructor(
    private router:Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {

  }
  loginForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]]
  })

  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }

  onSubmitHandler() {
   // console.log(this.loginForm.value)
   this.authService.login(this.loginForm.value).subscribe((response:any)=>{
//success
this.responseText='login success, thank you'
this.alertClass='alert alert-success'

localStorage.setItem('token',response.access_token)
this.router.navigateByUrl('')
console.log(response)
   },(error:any)=>{
    //failure
this.responseText='Oops! something went wrong, try again'
this.alertClass='alert alert-danger'
    console.log(error)
   }
   )
  }







}
