const button = document.getElementById('btn');
const inputValue = document.getElementById('txt')



//api key
const API = "http://api.giphy.com/v1/gifs/search?q=cat&api_key=n5v0ys2kC8OaWWwSg4chpqA837dlrHZs"



button.addEventListener('click',()=> {
  getApi(API)
})


 function getApi(api){

fetch(api)
  .then((response) => response.json())
  .then(function(res){
    
    res.data.forEach(function(d){
        console.log(d.url)
       
        createImage(d.url,"img","card-img-top")
    })

  })

}

function createImage(src,element,classname){
    let img = document.createElement(element);
    img.src = src;
    img.className = classname
    document.body.appendChild(img)
}

//errores  ---> indicate whether to send a cookie in a cross-site request by specifying its SameSite attribute

function updateCookie(){

    
}
updateCookie()