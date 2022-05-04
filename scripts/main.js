async function api(url) {

try{
    let res= await fetch(url)
let data= await res.json()
let blog=data.articles
return blog

}catch(err){
    console.log(err)
}
}


function append(details, main) {
main.innerHTML=null;
 
  details.map(function(el){

        let box=document.createElement("div")
        box.addEventListener("click",function(){
            mybox(el)
        })
        let  name=document.createElement("h3")
        name.innerText=el.title;
        let  des=document.createElement("p")
     des.innerText=el.content;
        let image= document.createElement("img")
        image.src=el.urlToImage;

        box.append(image,name,des)
        main.append(box)
    })
}
function mybox(el){
    localStorage.setItem("newss",JSON.stringify(el))
    window.location.href="news.html"
}
export {api,append}