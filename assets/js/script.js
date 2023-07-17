// Should be on every single HTML for the clickable navbar to work
// Index Homepage: Variables
// NavBar Clickable: make variables for the navigation bar to redirect? - Dahlia -done

//vars for main (top) nav items
var navHomeBtn = document.getElementById("homeBtn");
var navExploreBtn = document.getElementById("explore");
var navBookshelfBtn = document.getElementById("bookshelf");
var navBestSellersBtn = document.getElementById("bestSellers");

// vars for footer nav items
var footerNavExplore = document.getElementById("fExplore");
var footerNavBookshelf = document.getElementById("fBookshelf");
var footerNavBestSellers = document.getElementById("fBestSellers");

// Start Quiz button (for both show and movies - focus on shows for now)
var startShowBtn = document.querySelector(".showBinger");
var startMovieBtn = document.querySelector(".movieFan");

//vars for featured show and book in Homepage
var featuredSHOW = document.getElementById("FeaturedSHOWImg");
var featuredBOOK = document.getElementById("FeaturedBOOKImg");

// Variables for API Keys - GoogleBook API and TMBD
var googleBooksKey = "AIzaSyCtpFU2A6HSKklQfEKS0tabr54FI8fyQjc";
var tmdbKey = "&api_key=1866aca8e0c0dfcbef153230d45d9a50";


// Event listeners for Main navbar - DG
navHomeBtn.addEventListener('click', () => {
    if (window.location.href.endsWith('index.html')) {
    window.location.href ='index.html';
    } else {
        window.location.href = '../../index.html';
    }
});

navExploreBtn.addEventListener('click', () => {
    if (window.location.href.endsWith('index.html')) {
    window.location.href ='./assets/pages/explore.html';
    } else {
        window.location.href ='explore.html';
    }
});
navBookshelfBtn.addEventListener('click', () => {
    if (window.location.href.endsWith('index.html')) {
    window.location.href ='./assets/pages/bookshelf.html';
} else {
    window.location.href ='bookshelf.html';
}
});

// TODO: Replace link -Best sellers page is still a MAYBE for now?
navBestSellersBtn.addEventListener('click', () => {
    
    if (window.location.href.endsWith('index.html')) {
        window.location.href ='./assets/pages/quiz.html';
        } else {
            window.location.href ='quiz.html';
        }
});


// make quiz buttons clickable
if (window.location.href.endsWith('index.html')) {
startShowBtn.addEventListener('click', ()=> {
    window.location.href ='./assets/pages/quiz.html';
    
});

//TODO: Replace link for movies quiz when / if ready

startMovieBtn.addEventListener('click', ()=> {
    window.location.href ='./assets/pages/quiz.html';
});

// Set Featured Show Image (featuredSHOW) (featuredBOOK)

var showInfo = {
    fetchInfo: function (show) {
      fetch(
        'https://api.themoviedb.org/3/find/' + show + '?external_source=imdb_id' + tmdbKey
      )
        .then((response) => response.json())
        .then((data) => this.displayshowInfo(data));
    },
    
    displayshowInfo: function (data) {
      const { original_name, poster_path } = data.tv_results[0];
    //   console.log(data);
    //   console.log(poster_path);
      featuredSHOW.src = 'https://image.tmdb.org/t/p/w342' + poster_path;
      document.getElementById('showTitle').innerHTML = original_name;
            
    },
  };

  var bookInfo = {
    fetchInfo: function (book) {
        fetch(
            'https://www.googleapis.com/books/v1/volumes?q=isbn:'+ book +'&key=' + googleBooksKey
        )
        .then((response) => response.json())
        .then((data) => this.displayBookInfo(data));
    },

    displayBookInfo: function (data) {
        const { title, imageLinks, authors } = data.items[0].volumeInfo;
        featuredBOOK.src=imageLinks.thumbnail;
        document.getElementById('bookTitle').innerHTML = `${title} \nby ${authors[0]}`;
        },
  };

  showInfo.fetchInfo("tt4574334");
  bookInfo.fetchInfo("9781250147936");
};