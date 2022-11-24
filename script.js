let button=document.querySelector("#jokeBtn");
let text=document.querySelector("#joke");
let authorName=document.querySelector("#author");

let APIHandler=async()=>{
   
    let response=await fetch("https://type.fit/api/quotes");//returns json object
    let quotes=await response.json();
    let randomQuoteIndex=Math.floor(Math.random()*quotes.length);
    if(quotes[randomQuoteIndex].author==null){
        authorName.innerHTML="Anonymous";
    }
    text.innerHTML=quotes[randomQuoteIndex].text;
    authorName.textContent=quotes[randomQuoteIndex].author;
    
    }
    button.addEventListener("click",APIHandler);
// https://zenquotes.io/api/random