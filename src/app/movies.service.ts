import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  getData(url:any){
    return this.http.get(url)
  };
}
