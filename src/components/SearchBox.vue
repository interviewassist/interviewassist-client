<template>
    <div class="search-box">
        <input class="search-text" type="text" name="search" autofocus>
        <button class="search-button" href="#"><i class="material-icons">search</i></button>
    </div>    
</template>
<script>
export default {
    name: "SearchBox"
}
</script>
<style>
 .search-box{
     display:flex;
     box-sizing: border-box;
     background : #ddd;
     border-bottom: 1px solid #ccc;
     padding:1px 0 1px 0;
     border-radius: 1rem;
     margin: 1rem 0 0 3rem;
     position:absolute;
     top:0;
     left:0;
     justify-content: center;
 }
 .search-text{
     margin: 0 0 0 1rem;
     outline:none;
     width: 180px;
 }
 .search-button{
     
     float:right;
     margin : 0 0.3rem 0 0.3rem;
     background : inherit;
     display:flex;
     outline: none;
     width: 24px;
     height: 24px;
     border-radius: 50%;
     justify-content: center;
 }
 .search-button>i{
     box-sizing: content-box;
     font-size: 16px;
     border-radius: inherit;
     transition: all 0.3s;
 }
 .search-button>i:hover{
     font-weight: bold;
     background: #FBFAF6;
     padding : 2px;
 }
</style>


