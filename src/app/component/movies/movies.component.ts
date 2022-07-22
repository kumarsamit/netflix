import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/auth-guard/movies.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
	

	constructor(private movie: MoviesService, private route: ActivatedRoute) {
		
	}

	ngOnInit(): void { }
}
