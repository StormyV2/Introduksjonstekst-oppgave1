function amandoinfo(){
    document.getElementById('amandoned').innerHTML= /*HTML*/`
    <div class="amandocard">
   <ul>Navn: Amando Ball</ul>
    <ul>Location: Bergen</ul>
   <ul> Alder: 19</ul>
    <ul>Hobbyer: Styrke trening, Basketball, Gaming, Henge med venner, Alkoholiker i helgene</ul>
    <ul>Games: CS:GO, War Thunder, League Of Legends
    </div>
`
}

function byttbak(){
    var element = document.getElementById("backgroundid");
    element.classList.toggle("background2")
}