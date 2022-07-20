import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/auth-guard/movies.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
	list: any;
	list1: any;
	base_api_url = "https://api.themoviedb.org/3";
	base_poster_url = "https://image.tmdb.org/t/p/w500";
	api_key = "&api_key=ddf611caad1fe1aab5910321c0cfa7ba";
	data: any;
	slideConfig = {"slidesToShow": 9, "slidesToScroll": 1, "loop":true, swipeToSlide: true, arrows:false};
	trailer:any;


	constructor(private movie: MoviesService, private route: ActivatedRoute) {
		this.movie.getData(this.base_api_url + "/discover/movie?sort_by=popularity.desc" + this.api_key).subscribe((data) => {
			this.data = data;
			// console.log(data)
			this.list = Object.values(data)[1]
			console.log(this.list[0].id);
			this.trailer= "www.youtube.com/watch?v=" +  this.route.snapshot.params[this.list.id];
			console.log(this.trailer);

		});




		this.movie.getData(this.base_api_url + "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2020-10-22" + this.api_key).subscribe((data) => {
			this.data = data;
			// console.log(data)
			this.list1 = Object.values(data)[1]

		});
		console.log(this.trailer)

	}


	ngOnInit(): void {
	}

}





