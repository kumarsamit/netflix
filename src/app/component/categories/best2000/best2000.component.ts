import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/auth-guard/movies.service';

@Component({
  selector: 'app-best2000',
  templateUrl: './best2000.component.html',
  styleUrls: ['./best2000.component.scss']
})
export class Best2000Component implements OnInit {

	list: any;
	base_api_url = 'https://api.themoviedb.org/3';
	base_poster_url = 'https://image.tmdb.org/t/p/w500';
	api_key = '&api_key=ddf611caad1fe1aab5910321c0cfa7ba';
	data: any;
	slideConfig = {
		slidesToShow: 9,
		slidesToScroll: 1,
		loop: true,
		swipeToSlide: true,
		arrows: false,
		responsive: [
			{
				breakpoint:1400,
				settings: {
					slidesToShow: 9,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 8,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 6,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	};
	trailer: any;

	constructor(private movie: MoviesService, private route: ActivatedRoute) {
		this.movie
			.getData(
				this.base_api_url +
				'/discover/movie?primary_release_year=2000&certification.lte=G' +
				this.api_key
			)
			.subscribe((data) => {
				this.data = data;
				this.list = Object.values(data)[1];
				this.trailer =
					'www.youtube.com/watch?v=' + this.route.snapshot.params[this.list.id];
			});
	}

	ngOnInit(): void { }
}
