let button=document.querySelector("#jokeBtn");
let text=document.querySelector("#joke");
let authorName=document.querySelector("#author");

let APIHandler=async()=>{
   
    let response=await fetch("https://type.fit/api/quotes");//returns json object
    let quotes=await response.json();
    let randomQuoteIndex=Math.floor(Math.random()*quotes.length);
    console.log(quotes[randomQuoteIndex].author);
    text.innerHTML=quotes[randomQuoteIndex].text;
    authorName.textContent=quotes[randomQuoteIndex].author;
    if(quotes[randomQuoteIndex].author==null || quotes[randomQuoteIndex].author==" "){
        authorName.textContent="Anonymous";
    }
    }
    button.addEventListener("click",APIHandler);
