<template lang="html">

    <div class="main_wrap">
        <Modal></Modal>
        <Header></Header>
        <section>
            <ContextMenu></ContextMenu>
            <article class="center">
                <SearchBox></SearchBox>
                <div class="card" v-for="card in cards">
                </div>
                <p>{{tech}}</p>
                The question is, what did the archbishop find?' The Mouse gave a sudden leap out of it, and fortunately was just in time to hear it say, as it turned round and swam slowly back to her: its face was quite pale (with passion, Alice thought), and it said in a low curtain she had not got into it), and sometimes she scolded herself so severely as to bring tears into her eyes; and once she remembered trying to box her own ears for having cheated herself in a long, low hall, which was lit up by a row of lodging houses, and behind it was all dark overhead; before her was another long passage, and the White Rabbit returning, splendidly dressed, with a sudden burst of tears, until there was a large pool all round the hall, but they all looked so grave that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and found in it a very small cake, on which the words `EAT ME' were beautifully marked in currants. I wonder what I should be like then?' And she tried to fancy what the flame of a book,' thought Alice `without pictures or conversations in it, `and what is the use of a book,' thought Alice `without pictures or conversation?' So she was now the right size for going through the little door into that lovely garden.
            </article>
            <TechList @tech-event="getTech"></TechList>
        </section>
    </div>

</template>

<script>
import TechList from "../components/TechList"
import ContextMenu from "../components/ContextMenu"
import SearchBox from "../components/SearchBox"
import Modal from "../components/Modal"
import Header from "../components/Header"
export default {
    name : "MainPage"
    ,components:{
        TechList
        ,ContextMenu
        ,SearchBox
        ,Modal
        ,Header
    }
    ,data: function(){
        return{
            tech: 'android'
            ,cards : []
        }
    }
    ,methods:{
        /** get selected tech from techList */
        getTech : function(tech){
            this.tech = tech;
            console.log(tech);
        }
    }
}
</script>

<style>
div.main_wrap{
    background : #FBFAF6;
    color:rgba(4,5,9,0.8);
}
.main_wrap>section{
    display:flex;
    height:94vh;
}
section>article{
    flex:1;
    padding : 4rem 3rem 3rem 3rem;
    position:relative;
    overflow:auto;
    transition: all 0.5s;
}
article.center * {
    opacity: inherit;
}
.center>p::first-letter{
    font-weight: bold;
    font-size:3rem;
    color:#FBFAF6;
    background:rgba(4,5,9,0.8);
}
</style>