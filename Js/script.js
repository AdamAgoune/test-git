

function popUp () {
    alert("Vous venez de me créditer de 20.000$, merci bien !")
}

function infoConsole() {
    console.log ("Bien vu barbu")
}

function popUp2 () {
    alert("BIENVENUE ICI IL N'Y AS ENCORE PAS GRAND CHOSES")
}
function popUp3() {
    alert("WESH LA ZONE")
}



// let jeux = prompt("Quel est ton jeux préféré?") ;
//if (jeux.toLowerCase() =="wow") {
  //  console.log("Best jeux ever") ;
    
//} else if (jeux.toLowerCase() =="cs") {
  //  console.log("Pas mal");
//}
    //else if(jeux.toLowerCase() == "lol") {
    //console.log("Ouais ca passe");
   // }
    //else { 
      //  console.log("T'es mort dans le game");
    //}

    //for (let level = 0; level <= 60 ; level++) {
    //    console.log(`Je suis niveaux : ${level}`) ;
        
    //}
 //   console.log("Voila tous les élèves de la classe de cm2") ;
   // let list = ["Joseph" , "Jesus", "Moise", "Pierre", "Jean", "Jacques","Paul", "Micheline" ,"Nasser" ,"Paul" , "Patrick", "Stephane", "Sacha"] ;
   
   // list.forEach (function(apprenant) {
     //   console.log(apprenant) ;
    //});
  //  let chiant = prompt("Hey, on peux aller à Disneyland stp ?") ;

//while (chiant != "oui") {
  //  chiant = prompt("Aller stp stp stp") ;
    
//}
//console.log("Super !!")

//let title = document.querySelectorAll("p")[0];

//let liste = document.querySelectorAll("li")[5];

//let myH1 = document.querySelectorAll("h1")[2] ;

//document.querySelectorAll("li")[6].style.color.setProperty("color","red") ;
//document.querySelectorAll("li")[6].style.color.removeProperty("color") ;

document.querySelector(".title").addEventListener("mouseover", function() {  
  document.querySelector(".title").classList.toggle("modified-title") ;
});

document.querySelector(".title").addEventListener("mouseout", function() {  
  document.querySelector(".title").classList.toggle("modified-title") ;
});


document.querySelector(".liste").addEventListener("mouseover", function() {  
  document.querySelector(".liste").classList.toggle("listemodified") ;
});

document.querySelector(".liste").addEventListener("mouseout", function() {  
  document.querySelector(".liste").classList.toggle("listemodified") 
});




document.querySelector(".balise1").addEventListener("click", function() {  
  
  document.getElementById("p1").classList.toggle("modified");


 });
 
 document.querySelector(".balise2").addEventListener("click", function() {  
  
  document.getElementById("p2").classList.toggle("modified");

 });
 document.querySelector(".color").addEventListener("click", function() {  
  
  document.querySelector("body").classList.toggle("bodymodified");

});
 