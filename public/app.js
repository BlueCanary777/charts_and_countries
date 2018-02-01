var countries = []

var makeRequest = function(url, callback){
  request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200)return;
  var jsonString = this.responseText;
  countries = JSON.parse(jsonString);
  new PieChart('euro population', 'population', euroCountriesPop())
}

var smallerDatas = function(country){
  var smallData = {name: country.name, y: country.population}
  return smallData;
}

var euroCountriesPop = function(){
  return euroCountries().map(function(country){
    return smallerDatas(country);
  })
}

var euroCountries = function(){
  return countries.filter(function(country){
    return country.region === 'Europe'
  })
}



var ourData = [{
  name: 'Fire',
  y: 10,
  color: '#ffac33',
  // sliced: true
},{
  name: 'Water',
  y: 20,
  color: '#73b7ff'
},{
  name: 'Grass',
  y: 30,
  color: '#00ba2f'
}];
var ourTitle = 'Pokemons';
var ourName = "Number"



var columnTitle = 'Our Favourite Programming Languages'

var columnSeries = [{
  name: 'Cohort 17',
  data: [8, 12, 3, 1],
  // color: 'teal'
},{
  name: 'Cohort 18',
  data: [3, 14, 3, 0],
  // color: 'yellow'
},{
  name: 'Cohort 19',
  data: [7, 2, 9, 3],
  // color: 'orange'
}];

var columnCategories = ['JavaScript', 'Java', 'Ruby', 'Python'];





window.addEventListener('load', function(){
  var url = "https://restcountries.eu/rest/v2/all"
  makeRequest(url, requestComplete);
  // new PieChart(ourTitle, ourName, ourData);
  // new ColumnChart(columnTitle, columnSeries, columnCategories);
})

// column:
// title
// series: [name, data{}[]]

// pie:
// title
// series: [name, y]
