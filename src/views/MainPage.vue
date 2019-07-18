<template lang="html">

    <div class="main_wrap">
        <Header></Header>
        <section>
            <ContextMenu></ContextMenu>
            <article class="center">
                <SearchBox></SearchBox>
                <section class="card__outerwrap">
                  <template v-for="problem in problems">
                    <Problem :card="problem" ></Problem>
                  </template>
                </section>
                <Control></Control>
            </article>
            <TechList @tech-event="getTech"></TechList>
        </section>
    </div>

</template>

<script>
import TechList from "../components/TechList";
import ContextMenu from "../components/ContextMenu";
import SearchBox from "../components/SearchBox";
import Header from "../components/Header";
import Problem from "../components/Problem";
import Control from "../components/Control";

import { Mounted } from "../assets/js/mainPage";
export default {
  name: "MainPage",
  components: {
    TechList,
    ContextMenu,
    SearchBox,
    Header,
    Problem,
    Control
  },
  data: function() {
    return {
      tech: "android",
      problems: [
        {
          id: "",
          title: "면접질문입니다.....",
          tags: ["javascript", "ES6", "WEB", "front-end"],
          givenAnswer: "모범답안입니다...",
          references: ["github", "edwith"],
          lastUpdate: "2019.7.17"
        }
      ]
    };
  },
  mounted: Mounted,
  methods: {
    /** get selected tech from techList */
    getTech: function(tech) {
      this.tech = tech;
    }
  }
};
</script>

<style scoped>
@import url("../assets/css/main.css");
</style>