import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
	list: any;
	base_api_url = "https://api.themoviedb.org/3";
	base_poster_url = "https://image.tmdb.org/t/p/w500";
	api_key = "&api_key=ddf611caad1fe1aab5910321c0cfa7ba";
	data: any;
	constructor(private movie: MoviesService, private route: ActivatedRoute) {
		this.movie.getData(this.base_api_url + "/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc" + this.api_key).subscribe((data) => {
			this.data = data;
			// console.log(data)
			this.list = Object.values(data)[1]
			console.log(this.list);

		});

	}

	ngOnInit(): void {
	}

}
