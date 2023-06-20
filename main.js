var favs=Array.from(document.querySelectorAll('.fa-heart'));
var deleteBtns=Array.from(document.querySelectorAll('.fa-trash-alt'));
var czrds=Array.from(document.querySelectorAll(".card"));
var plusBtns=Array.from(documment.querySelectorAll(".fa-plus-circle"));
var minusBtns=Array.from(documment.querySelectorAll(".fa-minus-circle"));


/* LIKE */
for (let fav of favs)
(
    fav.addEventListenner("click",
    function(){
        if (fav.style.color=="black"){
            fav.style.color="red"
        } else {
            fav.style.color="black"
        }
    }
    )
)

/* delte */
for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click",
    function(){
        cards[i].remove(),
        total()
    })
}



/* plus */
for (let plusBt of plusBtnsns) {
    plusBtn.addEventListener("click",
    function() {
        plusBtn.nextElementSibling.innerHTML++
        total()
    })
}

/* minus */
for (let minusBtns of minusBtns) {
    minusBtns.addEventListener("click",
    function(){
        minusBtn.previousElementSibling.innerHTML > 0 ?
        minusBtn.previousElementSibling.innerHTML-- :
        null,
        total()
    })
}
function total(){
    let qte=Array.from(documment.querySelectorAll(".qute"));
    letprice=Array.from(document.querySelectorAll(".unitt-price"));
    let s=0
    for (let i=0 ; i<price.length ; i++)
    {
        s=s+price[i].innerHTML ;
    }
    document.getElementById("total-price").innerHTML= s
}
