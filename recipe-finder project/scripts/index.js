let result = document.getbyElementbyId('result');
let searchBtn = document.getElementById('search-btn');

let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

let userInp = document.getElementById("user-inp").value;

fetch(url + "bigmac")
    .then((response) => response.json())
    .then

