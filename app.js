//Class movies 
class Movies {
    constructor(date, title, actor) {
        this.title = title;
        this.actor = actor;
        this.date = date;
    }
}

// display movies
class UI {
    static ShowMovies() {
        const movie_data = [
            {
                date: "2014-07-10",
                title: "Magic World",
                actor: "JOHN"
            },
            {
                date: "2016-03-23",
                title: "Horror",
                actor: "Annie"
            },
            {
                date: "2010-04-12",
                title: "Two Girls",
                actor: "Penny, Hannah"
            },
            {
                date: "2013-01-04",
                title: "super Women",
                actor: "jenelia"
            }
        ]

        const data = movie_data;
        
        const search = document.querySelector('#search').value;
        document.querySelector("#movie-list").innerHTML = "";
        data.forEach(movie => {
            if (search.length > 0) {
                if (movie.title.includes(search)) {
                    UI.addMovieToList(movie);
                } else {
                    null;
                }
            } else {
                UI.addMovieToList(movie);
            }
        });
    }

    static addMovieToList(movie) {
        const list = document.querySelector("#movie-list");

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${movie.title}</td>
        <td>${movie.actor}</td>
        <td>${movie.date}</td>
        <td> <a href="#" class='btn btn-danger btn-sm delete'>X</a></td>
        `
        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#actor').value = '';
        document.querySelector('#date').value = '';
    }

    static deleteMovie(e) {
        if (e.classList.contains('delete')) {
            e.parentElement.parentElement.remove();
        }
    }
}

//Event: Display Movies
document.addEventListener("DOMContentLoaded", UI.ShowMovies);

//add movies
document.querySelector("#movie-form").addEventListener('submit', (e) => {
    //default event preventing
    e.preventDefault();
    const regexString = "^\\s+$";

    //Get form values
    const title = document.querySelector("#title").value;
    const actor = document.querySelector("#actor").value;
    const date = document.querySelector("#date").value;

    const newMovie = new Movies(date, title, actor);
     
    //add book 
    UI.addMovieToList(newMovie);

    //clear fields
    UI.clearFields();
})

//delete movies
document.querySelector("#movie-list").addEventListener('click', e => {
    UI.deleteMovie(e.target);
})

//search movies
document.querySelector("#search-form").addEventListener('submit', e => {
    e.preventDefault();
    UI.ShowMovies();   
})

const temp = document.querySelector("#add_movie_form");
temp.style.display = "none";
document.querySelector("#add_movie").addEventListener('click', () => {
    temp.style.display = "block";
    document.querySelector('#add_movie').style.display = "none";
})
