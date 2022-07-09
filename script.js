const quotes=["The rarest of human qualities is consistency.","Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway."]
const authors=["Jeremy Bentham","Earl Nightingale"]
const colors=["#FF5733","#FFC300","#DAF7A6","#900C3F","#581845","#9B0AF0"]

const btnColor=document.querySelector(".btn-change")
const text=document.querySelector(".quote_text")
const textAuthor=document.querySelector(".quote_author")
const icons=document.querySelectorAll(".fa-brands")


btnColor.addEventListener("click",showrandom)
window.addEventListener("load",showrandom)

function showrandom(){
    
    const random=Math.floor(Math.random()*quotes.length)
    const randomColor=Math.floor(Math.random()*colors.length)
    
    //Text change
    text.innerHTML=quotes[random]
    textAuthor.innerHTML=`- ${authors[random]}`
   
    
    
    //Color change

    text.style.color=colors[randomColor]
    textAuthor.style.color=colors[randomColor]
    btnColor.style.background=colors[randomColor]
    document.body.style.background=colors[randomColor]
    icons.forEach(icon=>icon.style.color=colors[randomColor])

}

function showrandomClick(){
    


   
    


}




