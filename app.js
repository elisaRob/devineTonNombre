'use strict';

const recuperationBoutonValidez=document.querySelector(".check");
const recuperationInput=document.querySelector('.guess');
const recuperationMessage=document.querySelector(".message");
let nombreAleatoire=Math.trunc(Math.random() *20)+1;
const number=document.querySelector('.number');
let score=20;
number.textContent=nombreAleatoire;
const recuperationScore=document.querySelector(".score");
const recuperationNouvellePartie=document.querySelector('.again')
let recuperationElementHightScore= document.querySelector(".highscore")
// let hightscore=0
let hightscore;
hightscore = localStorage.getItem('hightscore') ||  0;
recuperationElementHightScore.textContent = hightscore;




// let hightscore =0

recuperationNouvellePartie.addEventListener('click',()=>{
   
    window.location.reload()
   
})

recuperationBoutonValidez.addEventListener('click',function(){
    const bonNombre=Number(recuperationInput.value);

    if(!bonNombre){
        //Quand il n'y a pas de nombres
        recuperationMessage.textContent='Pas de nombre'
    }else if(nombreAleatoire===bonNombre){
        
        //Quand l'utilisateur a gagné la partie
        recuperationMessage.textContent='Bravo!'
        document.querySelector("body").style.backgroundColor="#60b347"
        number.style.width='30rem'

        if(score>hightscore){
            hightscore=score;
          
            
            // localStorage.setItem('plusHautScore', hightscore);
            recuperationElementHightScore.textContent =hightscore
            localStorage.setItem('hightscore',hightscore)

        }
    }else if(nombreAleatoire>bonNombre){
        if(score>0){

            //Quand c'est trop bas
            recuperationMessage.textContent="Trop bas";
            score --;
            recuperationScore.textContent=score;
            
        }else{
            recuperationMessage.textContent="Vous avez perdu la partie"
        }
       
     //Quand c'est trop haut
    }else if(nombreAleatoire<bonNombre){
        if(score>0){
            recuperationMessage.textContent="Trop haut"
            score --;
            recuperationScore.textContent=score
        }else{
            recuperationMessage.textContent="Vous avez perdu la partie"
        }
       
    }
    
})