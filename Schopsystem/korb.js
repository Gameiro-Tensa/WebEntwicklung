/* Checkt, ob die Seite komplett geladen ist */
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

//function bearbeiten
function ready(){
    var warenkorb = sessionStorage.getItem("warenkorb");

    if (warenkorb != null) {
        var summe = 0;

        var produkte = JSON.parse(warenkorb);
        for (var i = 0; i < produkte.length; i++) {
            var bildSrc = produkte[i].bildSrc
            var name = produkte[i].name
            var preis = produkte[i].preis
            
            //Inspiration: https://www.youtube.com/watch?v=YeFzkC2awTM --> Minute 29.15 - Minute ~34 
            var inhalt = document.getElementsByClassName("inhalt")[0];
            var produktHtml = `
                <img src="${bildSrc}" class="product-img">
                <div class="detail-box">
                    <div class="produkt-title">${name}</div>
                    <div class="price">${preis} €</div>
                    <i class='bx bxs-trash-alt ware-entfernen' data-entry-id='${i}'></i>
                </div>`
            inhalt.innerHTML += produktHtml

            summe += parseInt(preis)
        }
        
        //Produkt aus dem Warenkorb entfernen
        var knopfEntfernen = document.getElementsByClassName("ware-entfernen");
        for (var i = 0; i < knopfEntfernen.length; i++){
            var knopf = knopfEntfernen[i];
            knopf.addEventListener("click", entferntWare);
        }
        
        var gesamtPreis = document.getElementsByClassName("gesamt-preis")[0];
        gesamtPreis.innerHTML = summe + ' €'

        var kaufenKnopf = document.getElementsByClassName("knopf-kaufen")[0];
        kaufenKnopf.addEventListener("click", kaufen);
    }

}

//Produkt aus dem Warenkorb entfernen

function entferntWare(event){
    var warenkorb = sessionStorage.getItem("warenkorb");
    var item = event.target.getAttribute('data-entry-id');

    var produkte = JSON.parse(warenkorb);
    produkte.splice(item, 1);

    sessionStorage.setItem('warenkorb', JSON.stringify(produkte));
    location.reload();
}

function kaufen() {
    alert('Danke für Ihren Einkaufen! Bis zum nächsten Mal.')

    sessionStorage.setItem('warenkorb', '[]');
    location.reload();
}