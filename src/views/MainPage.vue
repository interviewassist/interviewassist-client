<template lang="html">

    <div class="main_wrap">
        <Header></Header>
        <section>
            <article class="center">
                <SearchBox></SearchBox>
                <section class="card__outerwrap">
                  <template v-for="problem in problems">
                    <Problem :card="problem" ></Problem>
                  </template>
                </section>
                <Control></Control>
            <ModalAddProblem></ModalAddProblem>
            </article>
            <ContextMenu></ContextMenu>
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
import ModalAddProblem from "../components/Modal__AddProblem";

import { Mounted } from "../assets/js/mainPage";
export default {
  name: "MainPage",
  components: {
    TechList,
    ContextMenu,
    SearchBox,
    Header,
    Problem,
    Control,
    ModalAddProblem
  },
  data: function() {
    return {
      tech: "android",
      problems: []
    };
  },
  created() {
    this.$http.get("/api/problems").then(response => {
      let problems = response.data;
      problems.forEach(problem => {
        problem.givenAnswer = problem.given_answer;
        delete problem.given_answer;
        problem.tags = problem.tags.map(item => item.tag); // flats tag array
      });
      this.problems = problems;
    });
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