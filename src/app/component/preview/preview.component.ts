import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/auth-guard/movies.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  	list: any;
	base_api_url = "https://api.themoviedb.org/3";
	base_poster_url = "https://image.tmdb.org/t/p/w500";
	api_key = "&api_key=ddf611caad1fe1aab5910321c0cfa7ba";
	trailer:any;
	trailerList:any;
	trailerurl:any;


  constructor(private movie: MoviesService, private route: ActivatedRoute,private domSanitizer: DomSanitizer) {
		this.movie.getData(this.base_api_url + "/discover/movie?sort_by=popularity.desc" + this.api_key).subscribe((data) => {
			this.list = Object.values(data)[1]
			let rand = this.getRandomInt(this.list.length)
			this.trailer = "https://api.themoviedb.org/3/movie/" + this.list[rand].id + "/videos?api_key=ddf611caad1fe1aab5910321c0cfa7ba";

			this.movie.getData(this.trailer).subscribe((trailerList) => {
				this.trailerList = trailerList
				let rand = this.getRandomInt(this.trailerList.results.length)
				this.trailerurl = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.trailerList.results[rand].key)
			})
			this.trailer= "www.youtube.com/watch?v=" +  this.route.snapshot.params[this.list.id];

		});

	}

	ngOnInit(): void {
	}
	getRandomInt(max: any) {
		return Math.floor(Math.random() * max);
	}

}
