// global variables
const search_term = document.getElementById("search");
const submitButton = document.getElementById("submit");
// api stuff
const apiKey = "YOC5GD9RH1V8";
const lmt = 1;

function getApi(event) {
    event.preventDefault();
    
    const searchTermText = search_term.value
    const api_url = `https://g.tenor.com/v1/search?key=${apiKey}&q=${searchTermText}&limit=${lmt}`;
    
    fetch(api_url)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            console.log(result);
           this.renderGif(result);
        });
}

submitButton.addEventListener("click", getApi)

//how to get to gif url 
//response_objects.results[0].media[0].gif.url
//changed results to data
function renderGif(result) {
    let gifUrl = result.results[0].media[0].gif.url;
    document.getElementById("gif").src= gifUrl;
    console.log(result);
}
