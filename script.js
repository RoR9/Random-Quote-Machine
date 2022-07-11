const quotes=["The rarest of human qualities is consistency.","Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.","Live as if you were to die tomorrow. Learn as if you were to live forever.",
"Do what you can, with what you have, where you are.",
"Do not let what you cannot do interfere with what you can do.",
`A journey of a thousand leagues begins beneath one’s feet.`,
"The best way to predict the future is to invent it.",
"Change your thoughts and you change your world.",
"Happiness is not something ready made. It comes from your own actions.",
`You miss 100% of the shots you don’t take.`,
"It is never too late to be what you might have been.",
"In three words I can sum up everything I’ve learned about life: It goes on.",
"Self-reverence, self-knowledge, self control — these three alone lead to power."

]
const authors=["Jeremy Bentham","Earl Nightingale","Mahatma Gandhi","Theodore Roosevelt","John Wooden","Lao Tzu","Alan Kay","Norman Vincent","Dalai Lama","Wayne Gretzky","George Eliot","Robert Frost","Alfred, Lord Tennyson"]
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
    if(text.textContent===quotes[random]){
        return showrandom()
    }
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





