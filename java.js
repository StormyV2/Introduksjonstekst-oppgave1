function amandoinfo(){
    document.getElementById('amandoned').innerHTML= /*HTML*/`
    <div id="closeinfo">
      <div class="amandocard">
         <ul>Navn: Amando Ball</ul>
         <ul>Location: Bergen</ul>
         <ul> Alder: 19</ul>
         <ul>Hobbyer: Styrke trening, Basketball, Gaming, Henge med venner, Alkoholiker i helgene</ul>
         <ul>Games: CS:GO, War Thunder, League Of Legend
         <div class="closer" onclick="closeinfo()">Lukk</div>
    </div>
`
}

function closeinfo(){
    document.getElementById('closeinfo').innerHTML=``;
    
}

function byttbak(){
    var element = document.getElementById("backgroundid");
    element.classList.toggle("background2")
}