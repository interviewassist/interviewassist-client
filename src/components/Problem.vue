<template>
  <div class="card">
    <div class="card__innerwrap">
      <div class="card__title">{{card.title}}</div>
      <div class="card__lastupdate">{{card.lastUpdate}}</div>
      <div class="card__tags">
        <span v-for="tag in card.tags" class="card__tag">{{tag}}</span>
      </div>
      <button class="card__toggle">
        <i class="material-icons">keyboard_arrow_down</i>
      </button>
      <div class="card__detail">
        <textarea style="height:10rem" class="card__input" name="useranswer" placeholder="작성해주세요"></textarea>
        <button class="card__btn card__showgivenanswer">모범답안 비교</button>
        <textarea style="height:10rem" class="card__givenanswer" readonly>{{card.givenAnswer}}</textarea>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Problem",
  props: {
    card: { type: null }
  }
};
</script>

<style scoped>
@import url("../assets/css/main__card.css");
</style>
