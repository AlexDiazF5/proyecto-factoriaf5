var faq = document.getElementsByClassName("faqPage")

var i;

for(i = 0; i < faq.length; i++){
    faq[i].addEventListener("click", function(event){
        var clickedItem = event.currentTarget

        clickedItem.classList.toggle("active")

        var body = clickedItem.nextElementSibling

        if(body.style.display === "block") {
            body.style.display = "none"
        } else {
            body.style.display = "block"
        }
    })
}