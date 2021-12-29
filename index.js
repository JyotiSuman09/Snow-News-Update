console.log("This is my  javascript file.");
//  473331c678a746bfb4dbcccd75159aaa

//Grab the news container and initialize variable
let newsAccordion = document.getElementById("newsAccordion");
const apiKey = "473331c678a746bfb4dbcccd75159aaa";
// let source = 'sources=the-times-of-india';
let source = 'country=in';

function loadnews(){
    
    //Create a get request
    const xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        `https://newsapi.org/v2/top-headlines?${source}&apiKey=${apiKey}`,
        true
        );
        
        xhr.onload = function () {
            if (this.status === 200) {
                let json = JSON.parse(this.responseText);
                let articles = json.articles;
                console.log(articles);
                let newsHtml = "";
                articles.forEach(function(element, index) {
                    // console.log(element, index)
                    let news = `<div class="card my-3">
                    <div class="card-header" id="heading${index}">
                    <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                    aria-expanded="false" aria-controls="collapse${index}">
                    <b>Breaking News ${index+1}:</b> ${element["title"]}
                    </button>
                    </h2>
                    </div>
                    
                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                    <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                    </div>
                    </div>`;
                    newsHtml += news;
                });
                newsAccordion.innerHTML = newsHtml;
            }
            else {
                console.log("Some error occured")
            }
        }
        
        xhr.send();
        
        
    }
loadnews();

bbc=()=>{
    source = 'sources=bbc-news'
    loadnews();
}
usa=()=>{
    source = 'country=us'
    loadnews();
}
cnn=()=>{
    source = 'sources=cnn';
    loadnews();
    
}