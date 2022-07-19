import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/auth-guard/movies.service';
import { signinModal } from './signin.modal';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
	loginUserForm!: FormGroup;
	signinObj: signinModal = new signinModal()
	username:any = 'test';
	userpd:any  = 'test';
	


	ngOnInit(): void {
		this.loginUserForm = this.formbuilder.group({
			Email: [''],
			Password: ['']
		})
	}

	constructor(private formbuilder: FormBuilder,
		private http: HttpClient, private router: Router, private api: MoviesService) { }


	loginUser() {	
        let password = this.loginUserForm.value.Password;
        let email = this.loginUserForm.value.Email;

		if("test" == email && 'test' === password){
			localStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
			this.router.navigate(['/movies']);
		}
		else{
			alert("invalid user !!!")
		}	
		}
}
