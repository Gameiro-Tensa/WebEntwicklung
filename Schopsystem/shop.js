/* Checkt, ob die Seite komplett geladen ist */
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ablegen(bildSrc, name, preis) {
    var warenkorb = sessionStorage.getItem("warenkorb")

    if (warenkorb == null) {
        warenkorb = "[]"
    }

    var produkte = JSON.parse(warenkorb)
    produkte.push({
        name: name,
        preis: preis,
        bildSrc: bildSrc
    })

    sessionStorage.setItem("warenkorb", JSON.stringify(produkte))
}

function ready(){
    //Produkt in den Warenkorb legen
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++){
        var knopf = addCart[i];
        knopf.addEventListener("click", WareHinzu);
    }
}

function WareHinzu(event){
    alert("Ware wurde hinzugefügt!")
    var children = event.target.parentElement.childNodes;
   
    var objekt = {}

    for (var i = 0; i < children.length; i++) {
        var tag = children[i]

        if (tag.tagName == "IMG") {
            objekt.bildSrc = tag.getAttribute('src');
        }
        else if (tag.tagName == "H2") {
            objekt.name = tag.innerHTML;
        }
        else if (tag.tagName == "SPAN") {
            objekt.preis = tag.innerHTML.replace('€', '').trim();
        }
    }

    ablegen(objekt.bildSrc, objekt.name, objekt.preis);
}