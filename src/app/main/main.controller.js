export class MainController {
  constructor($timeout, webDevTec, toastr) {
    'ngInject';


    this.data = [
      {
        singers: "The Kingston Trio",
        single: "Tom Dooley",
        genre: "Folk",
        year: "1958"
      },
      {
        singers: "Led Zeppelin",
        single: "Kashmir",
        genre: "Rock",
        year: "1975"
      },
      {
        singers: "Miles Davis",
        single: "Blue in Green",
        genre: "Jazz",
        year: "1959"
      },
      {
        singers: "Muddy Waters",
        single: "Mannish Boy",
        genre: "Blues",
        year: "1955"
      }
    ];


    // Жанры
    //this.genres;
    //this.years;
    //this.singers;
    //
    let genresArray = [];
    let genres = {};
    this.data.forEach(function (item) {
      if (genres[item.genre] === undefined) {
        genres[item.genre] = item;
        genresArray.push({
          value: item.genre,
          display: item.genre
        });
      }
    });
    this.genres = genresArray;

    let yearsArray = [];
    let years = {};
    this.data.forEach( (item) => {
      if (years[item.year] === undefined) {
        years[item.year] = item;
        yearsArray.push({
          value: item.year,
          display: item.year
        });
      }
    });
    this.years = yearsArray;


    let singersArray = [];
    let singers = {};
    this.data.forEach( (item)=> {
      if (singers[item.singers] === undefined) {
        singers[item.singers] = item;
        singersArray.push({
          value: item.singers,
          display: item.singers
        });
      }
    });
    this.singers = singersArray;

    this.search = {"singers":"","genre":"","year":""};

    this.filter = "";

    this.setFilter = (filterString) =>{
      console.log(filterString);
      if (this.filter==filterString){
        this.filter = '-'+filterString;
      }else {
        this.filter = filterString;
      }
      console.log(this.filter);

    }
  }
};
