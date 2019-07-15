<template>
  <header>
    <img id="logo" src="../assets/logo2.png">
    <div class="control-set">
      <button class="move_context"><i class="material-icons">person</i></button>
      <button class="move_techlist"><i class="material-icons">menu</i></button>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header"
    ,mounted : function(){
        var self = this;

        var move_techlist = document.querySelector(".control-set>.move_techlist");

        var article = document.getElementsByClassName("center")[0];

        var techlist = document.querySelector("nav.right");
        var tech_section = document.querySelector("nav.right>section");
        
        var context = document.querySelector("nav");
        var context_section = document.querySelector("nav>section");
        
        /** menu open&close button  */
        move_techlist.addEventListener("click",function(element){
            /**In callback function ( this. === move_techlist. )*/
            if(techlist.isOpened===undefined){
                context.isOpened = false;
            }
            if(techlist.isOpened){
                techlist.style.width = "0px";
                tech_section.style.width = "0px";
                tech_section.style.transitionDelay = "0s";
                tech_section.style.opacity = "0";
                article.style.display = "block";
            }else{
              if(window.outerWidth <= 414 ){
                if( article.style.display === "none"){
                    context.style.width = "0px";
                    context_section.style.width = "0px";
                    context_section.style.transitionDelay = "0s";
                    context_section.style.opacity = "0";
                    context.isOpened = !context.isOpened;
                }else{
                  article.style.display= "none";
                }
                techlist.style.width = "100vw";
                tech_section.style.width = "100vw";
              }else{
                techlist.style.width = "20rem";
                tech_section.style.width = "20rem";
              }
                tech_section.style.transitionDelay = "0.23s";
                tech_section.style.opacity = "1";
            }
            techlist.isOpened = !techlist.isOpened;
        });

        var move_context = document.querySelector(".control-set>.move_context");
        
        move_context.addEventListener("click",function(element){

            /**In callback function ( this. === move_context. )*/
            if(context.isOpened===undefined){
                context.isOpened = false;
            }
            if(context.isOpened){
                context.style.width = "0px";
                context_section.style.width = "0px";
                context_section.style.transitionDelay = "0s";
                context_section.style.opacity = "0";
                article.style.display = "block";
            }else{
              if(window.outerWidth <= 414 ){
                if( article.style.display === "none"){
                    techlist.style.width = "0px";
                    tech_section.style.width = "0px";
                    tech_section.style.transitionDelay = "0s";
                    tech_section.style.opacity = "0";
                    techlist.isOpened = !techlist.isOpened;
                }else{
                  article.style.display= "none";
                }
                context.style.width = "100vw";
                context_section.style.width = "100vw";
              }else{
                context.style.width = "10rem";
                context_section.style.width = "10rem";
              }
                context_section.style.transitionDelay = "0.4s";
                context_section.style.opacity = "1";
            }

            context.isOpened = !context.isOpened;
        });
    }
  }
</script>
<style>
/* Header.css*/
header{
    background:rgba(4,5,9,0.8);
    display:flex;
    height:6vh;
    justify-content: space-between;
}
header>#logo{
  height:inherit;
}
header>.control-set{
    display: flex;
    margin: 0 1rem 0 0;
    justify-content: center;
}
.control-set>*{
  color: #FBFAF6;
  outline:none;
}
.control-set>.move_context{
  margin: 0 0.3rem 0 0 ;
}
/* Header.css*/
</style>



