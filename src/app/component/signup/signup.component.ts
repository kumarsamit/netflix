import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/auth-guard/movies.service';
import { signupModal } from './signup.modal';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerUserForm!: FormGroup;
  signupObj: signupModal = new signupModal();

  ngOnInit(): void {
    this.registerUserForm = this.formbuilder.group({
			Name: [''],
			Contact: [''],
			Email: [''],
			Password: [''],
		});
  }


  constructor(private formbuilder: FormBuilder,
		private http: HttpClient,private router: Router,private api: MoviesService) { 
    
  }
  registerUser() {
    this.signupObj.name = this.registerUserForm.value.Name;
    this.signupObj.email = this.registerUserForm.value.Email;
    this.signupObj.contact = this.registerUserForm.value.Contact;
    this.signupObj.password = this.registerUserForm.value.Password;
  
    this.api.userList(this.signupObj).subscribe(
      (res) => {
        console.log(res);
        this.registerUserForm.reset();
        this.router.navigate(['signin'])
      }
    );
  }



}

