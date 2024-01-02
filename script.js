let api="https://www.omdbapi.com/?apikey=d66d45a1&t=";
let movieName=document.getElementById('movieName');
let title=document.getElementById('title');
let director=document.getElementById('director');
let ratings=document.getElementById('ratings');
let actor=document.getElementById('actor');
let genere=document.getElementById('genere');
let awards=document.getElementById('awards');
let writer=document.getElementById('writer');
let boxoffice=document.getElementById('boxoffice');
let description=document.getElementById('description');
let poster=document.getElementById('poster');


function searchMovie(){
    let query=api+movieName.value;
    fetch(query).then((data)=>{
        return data.json()
    }).then((data)=>{
        title.innerText=data.Title;
        date.innerText=data.Released;
        director.innerText=data.Director;
        awards.innerText=data.Awards;
        actor.innerText=data.Actors;
        description.innerText=data.Plot;
        ratings.innerText=data.imdbRating;
        boxoffice.innerText=data.BoxOffice;
        writer.innerText=data.Writer;
        genere.innerText=data.Genre;
        poster.src=data.Poster;
    });
}