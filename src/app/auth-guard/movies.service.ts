import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  getData(url:any){
    return this.http.get(url)
  };

  userList(data:any){
    return this.http.post<any>("http://localhost:3000/profile",data).pipe(map((res:any) => {
      return res
    }))
  }
  
  isLoggedIn(){
    return   localStorage.getItem('token');
  }
}
