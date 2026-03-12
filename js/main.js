window.onload = function(){

if(document.body.classList.contains("home")){

const items = document.querySelectorAll(".fade")

items.forEach((item,i)=>{

setTimeout(()=>{
item.classList.add("show")
},i*200)

})

}

}
