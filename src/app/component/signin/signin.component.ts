import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';
import { signinModal } from './signin.modal';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
	loginUserForm!: FormGroup;
	signinObj: signinModal = new signinModal()


	ngOnInit(): void {
		this.loginUserForm = this.formbuilder.group({
			Email: [''],
			Password: ['']
		})
	}

	constructor(private formbuilder: FormBuilder,
		private http: HttpClient, private router: Router, private api: MoviesService) { }


	loginUser() {	
		this.http.get<any>('http://localhost:3000/profile').subscribe((res) => {
        let password = this.loginUserForm.value.Password;
        let email = this.loginUserForm.value.Email;
        console.log(res)

        var test2 = res.filter((o:any)=>o.email == email && o.password === password)

        	if(test2 && test2.length>0){
        		this.router.navigate(['/movies']);
        		alert("login successful")
			}
			else{
				alert("someting went wrong")
			}	
		},
    	err=>{
    		alert("someting went wrong")
    	})

	}
}
