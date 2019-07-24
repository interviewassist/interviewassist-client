<template>
  <div class="card">
    <div class="card__innerwrap">
      <div class="card__title">{{card.title}}</div>
      <div class="card__lastupdate">{{card.lastUpdate}}</div>
      <div class="card__tags">
        <span v-for="tag in card.tags" class="card__tag">{{tag}}</span>
      </div>
      <button class="card__toggle">
        <i
          class="material-icons card__opener"
          :class="{'icon__rotate':isUserAnswer}"
        >keyboard_arrow_down</i>
      </button>
      <div class="card__detail" :class="{ 'card__ShowDetail' : isUserAnswer}">
        <textarea style="height:10rem" class="card__input" name="useranswer" placeholder="작성해주세요">{{card.answer}}</textarea>
        <button
          class="card__btn card__showgivenanswer"
          :class="{'card__showgivenanswer--active' : isUserAnswer}"
        >모범답안 비교</button>
        <div ref="givenAnswer" class="card__givenanswer"></div>
      </div>
    </div>
  </div>
</template>
<script>
import marked from "marked";

export default {
  name: "Problem",
  props: {
    card: { type: null },
    isUserAnswer: { type: Boolean }
  },
  mounted() {
    this.card.givenAnswer = marked(this.card.givenAnswer);
    this.$refs.givenAnswer.innerHTML = this.card.givenAnswer;
  }
};
</script>

<style scoped>
@import url("../assets/css/main__card.css");
</style>
