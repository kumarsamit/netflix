base_api_url = "https://api.themoviedb.org/3"
base_poster_url = "https://image.tmdb.org/t/p/w500"
api_key ="&api_key=ddf611caad1fe1aab5910321c0cfa7ba"

popular_movies = "/discover/movie?sort_by=popularity.desc"
upcoming_movies = "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"
highest_R_rated = "/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc"
popular_in_kids = "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"
best_of_2010 = "/discover/movie?primary_release_year=2010&sort_by=vote_average.desc"
best_drama_2014 = "/discover/movie?with_genres=18&primary_release_year=2014"
tom_cruise_movies = "/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc"
will_ferrel_movies = "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"
best_drama = "/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10"

// movie_list = base_api_url + "movie type" + api_key
// movie_poster  = base_poster_url + "poster url from api data"

