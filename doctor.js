var circle1 = document.getElementById("circle1");

circle1.addEventListener("mouseover", function( event ) {
   event.target.style.backgroundColor = "red";
   document.getElementById("text").innerHTML = 'Epaule: </br></br>La région morphologique de l\'épaule (nom féminin) se situant à la jonction du tronc avec le membre supérieur.Elle comporte plusieurs articulations qui concourent à en faire le complexe articulaire le plus mobile du corps humain.Elle permet d\'orienter le membre supérieur dans l\'espace, autorisant en particulier son extrémité effectrice, la main, à assurer ses rôles de préhension et de communication avec l\'environnement situé à sa portée.';

   circle1.addEventListener("mouseout", function( event ) {
     event.target.style.backgroundColor = "";
     document.getElementById("circle1").innerHTML = '';
     document.getElementById("text").innerHTML = '';
   });
   });
   var circle2 = document.getElementById("circle2");

circle2.addEventListener("mouseover", function( event ) {
    event.target.style.backgroundColor = "red";
    document.getElementById("text").innerHTML = 'Poignet: </br></br>C\'est une région du membre supérieur située entre la main et l\'avant-bras, et contenant le carpe.Élément-clé pour le fonctionnement de la main, il permet les mouvements (c\'est-à-dire les changements de place et d’orientation) de la main par rapport à l\’avant-bras, transmet les forces appliquées de la main à l\’avant-bras, permet d\'adapter la capacité de flexion-extension maximale des doigts et de la préhension.';

    circle2.addEventListener("mouseout", function( event ) {
      event.target.style.backgroundColor = "";
      document.getElementById("circle1").innerHTML = '';
      document.getElementById("text").innerHTML = '';
    });
    });
var circle3 = document.getElementById("circle3");

  circle3.addEventListener("mouseover", function( event ) {
      event.target.style.backgroundColor = "red";
     document.getElementById("text").innerHTML = 'Genou: </br></br>C\'est une articulation qui permet de joindre la jambe à la cuisse.Elle met en jeu trois os, le fémur, le tibia et la patella, par le biais de trois articulations, l\'articulation fémoro-patellaire et la double articulation fémoro-tibiale. Le cartilage assure la fluidité des mouvements du genou. Le tissu élastique fin, le cartilage, protège l\'os et fait en sorte que les surfaces de l\'articulation glissent facilement les unes contre les autres.';

       circle3.addEventListener("mouseout", function( event ) {
         event.target.style.backgroundColor = "";
         document.getElementById("circle1").innerHTML = '';
         document.getElementById("text").innerHTML = '';
 });
});
var circle4 = document.getElementById("circle4");

  circle4.addEventListener("mouseover", function( event ) {
    event.target.style.backgroundColor = "red";
    document.getElementById("text").innerHTML = 'Cheville: </br></br>C\' est l\'articulation qui relie la jambe et le pied.Elle est parfois sujette à des entorses, le plus souvent externes par flexion plantaire et pied en équin.Une cheville adulte est composée, au point de vue osseux, de l\'épiphyse inférieure du tibia (malléole interne et plafond), de l\'épiphyse inférieure de la fibula (ou péroné) (malléole externe) et du talus (ou astragale). Classiquement, on parle d\'articulation supinale de l\'arrière pied.';

    circle4.addEventListener("mouseout", function( event ) {
      event.target.style.backgroundColor = "";
      document.getElementById("circle4").innerHTML = '';
      document.getElementById("text").innerHTML = '';
});
});
 var circle5 = document.getElementById("circle5");

  circle5.addEventListener("mouseover", function( event ) {
    event.target.style.backgroundColor = "red";
    document.getElementById("text").innerHTML = 'Hanche: </br></br>C\'est une articulation (énarthrose) qui permet de joindre la cuisse au bassin. Elle met en jeu deux os : l\'os iliaque et le fémur.Elle permet une répartition homogène des forces et une optimisation de l\'amplitude du mouvement.';

     circle5.addEventListener("mouseout", function( event ) {
       event.target.style.backgroundColor = "";
       document.getElementById("circle5").innerHTML = '';
       document.getElementById("text").innerHTML = '';
});
});
var circle6 = document.getElementById("circle6");

circle6.addEventListener("mouseover", function( event ) {
   event.target.style.backgroundColor = "red";
   document.getElementById("text").innerHTML = 'Coude: </br></br>st la partie du membre supérieur située entre le bras et l\'avant-bras. Cette articulation comprend en avant la région du « pli du coude » (ou fosse cubitale). C\'est un complexe articulaire synovial du membre supérieur humain reliant le bras à l\'avant-bras. Il unit ainsi trois os entre eux : le radius, l\'ulna (cubitus) et l\'humérus.Elle est la réunion de trois articulations : huméro-ulnaire, huméro-radiale et radio-ulnaire proximale (supérieure).';

   circle6.addEventListener("mouseout", function( event ) {
     event.target.style.backgroundColor = "";
     document.getElementById("circle6").innerHTML = '';
     document.getElementById("text").innerHTML = '';
   });
   });
