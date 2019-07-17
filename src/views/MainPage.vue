<template lang="html">

    <div class="main_wrap">
        <Header></Header>
        <section>
            <ContextMenu></ContextMenu>
            <article class="center">
                <SearchBox></SearchBox>
                <section class="card__outerwrap">
                  <template v-for="problem in problems">
                    <Problem :card="problem"></Problem>
                  </template>
                </section>
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
export default {
  name: "MainPage",
  components: {
    TechList,
    ContextMenu,
    SearchBox,
    Header,
    Problem
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
  mounted: function() {
    var center = document.getElementsByClassName("center")[0];
    center.addEventListener("click", evt => {
      var list = evt.target.classList;
      if (list.contains("card__toggle")) {
        var detail = evt.target.parentElement.lastElementChild;
        detail.classList.toggle("card__ShowDetail");

        var icon = evt.target.firstElementChild;
        icon.classList.toggle("icon__rotate");
      } else if (list.contains("material-icons")) {
        var detail = evt.target.parentElement.parentElement.lastElementChild;
        console.log(detail.classList);
        detail.classList.toggle("card__ShowDetail");
        evt.target.classList.toggle("icon__rotate");
      }
    });
  },
  methods: {
    /** get selected tech from techList */
    getTech: function(tech) {
      this.tech = tech;
    }
  }
};
</script>

<style scoped>
@media (min-width: 0px) and (max-width: 414px) {
  .center {
    padding: 3rem 1rem 1rem 1rem;
  }
  section.card__outerwrap {
    column-count: 1;
  }
}
@media (min-width: 415px) {
  .center {
    padding: 4rem 3rem 3rem 3rem;
  }
  section.card__outerwrap {
    column-count: 2;
  }
}
div.main_wrap {
  background: #fbfaf6;
  color: rgba(4, 5, 9, 0.8);
}
.main_wrap > section {
  display: flex;
  height: 94vh;
}
article.center {
  flex: 1;
  overflow: auto;
  position: relative;
}
article.center * {
  opacity: inherit;
}
section.card__outerwrap {
  display: block;
  position: relative;
}
section.card__outerwrap:hover .card:not(:hover) {
  opacity: 0.96;
}
</style>