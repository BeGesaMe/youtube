let youtubeBody = document.querySelector('.youtube-body');
let youtubeMovieCardTemplate = document.querySelector('.youtube-movie-card-template').content
let newFragments = new DocumentFragment();


function movies(film){
    
    for(let i = 0; i < film.length; i++){
        // console.log(film[i]);

        let cloneYoutubeCard = youtubeMovieCardTemplate.cloneNode(true);

        cloneYoutubeCard.querySelector('.youtube-movie-card-img').src = film[i].poster;
        cloneYoutubeCard.querySelector('.youtube-movie-card-title').innerHTML = film[i]. title;

        youtubeBody.appendChild(cloneYoutubeCard);
    }

}

movies(films)

