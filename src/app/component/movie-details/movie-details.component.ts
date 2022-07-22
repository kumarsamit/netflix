import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/auth-guard/movies.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-movie-details',
	templateUrl: './movie-details.component.html',
	styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
	trailer: any;
	trailerList: any;
	trailerurl: any;
	// interface


	constructor(private movie: MoviesService, private route: ActivatedRoute, private domSanitizer: DomSanitizer) {
		this.trailer = "https://api.themoviedb.org/3/movie/" + this.route.snapshot.params['id'] + "/videos?api_key=ddf611caad1fe1aab5910321c0cfa7ba";
		console.log(this.trailer);
		this.movie.getData(this.trailer).subscribe((trailerList) => {
			this.trailerList = trailerList
			console.log(trailerList);
			let rand = this.getRandomInt(this.trailerList.results.length)
			// this.trailerurl =  "https://youtu.be/" + this.trailerList.results[rand].key;
			this.trailerurl = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.trailerList.results[rand].key + '?rel=0&autoplay=1')
			console.log(this.trailerurl)
		})
	}

	getRandomInt(max: any) {
		return Math.floor(Math.random() * max);
	}

	ngOnInit(): void {
	}

}