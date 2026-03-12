const isHome = window.location.pathname.includes("index")

if(isHome){

window.onload = function(){

const items = document.querySelectorAll(".fade")

items.forEach((item,i)=>{

setTimeout(()=>{
item.classList.add("show")
},i*200)

})

}

}
