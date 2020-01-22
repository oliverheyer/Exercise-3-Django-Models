var movies = [];

function getCatalog(){
    $.ajax({
        url: 'http://127.0.0.1:8000/api/movies',
        type: "GET",
        success: function(response){
            console.log("response from server", response);

            movies = response.objects;
            for(var i=0; i< movies.length; i++){
                var movie = movies[i];
                displayMovie(movie, i);
            }

        },
        error: function(errorDetails){
            console.log("Error, errorDetails")
        }
    });
}

function displayMovie(movie, movie_count){
    // get container
    console.log("text error")
var container = $("#container");
var first = "";
if(movie_count == 0) first = "active";

    // create html sintax
var sintax = 
`
<div class="carousel-item ${first}">
<img src="${movie.image_url}" class="d-block w-100" alt="...">
<div class="carousel-caption d-none d-md-block">

<h5>${movie.title} (${movie.release_year}) </h5>
A Film By ${movie.director}

</div>
</div>
`;
console.log(sintax)
var Indicator=`<li data-target="#carouselExampleCaptions" data-slide-to="${movie_count}" class="${first}"></li>` 


// add sintax to container
container.append(sintax);
$(".carousel-indicators").append(Indicator);
}

function init(){
    console.log("Catalog JS is loaded");

    getCatalog();
}


window.onload = init; 