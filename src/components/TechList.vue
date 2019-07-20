<template>
  <nav class="techlist">
    <button class="techlist__closer techlist--removed">
      <i class="material-icons">chevron_right</i>
    </button>
    <section class="techlist__innerwrap">
      <ul class="tech techlist--removed">
        <li v-for="topic in topics">
          <img class="tech_img tech_event" :src="topic.thumbnail" />
          <h3 class="tech_event">{{topic.name}}</h3>
          <p>{{topic.name}} is ...</p>
          <input :id="topic.name" type="hidden" :value="topic.name" />
        </li>
      </ul>
    </section>
  </nav>
</template>
<script>
import { Mounted } from "../assets/js/techList";

export default {
  name: "TechList",
  data: function() {
    return {
      topics: {}
    };
  },
  created: function() {
    this.$http.get(`/api/topics/`).then(response => {
      let { data } = response;
      data.forEach(topic => {
        this.$http
          .get(`/api/topics/thumbnail/${topic.thumbnail}`)
          .then(response => {
            topic.thumbnail = `data:image/png;base64,${response.data}`;
          });
      });
      this.topics = data;
    });
  },
  mounted: Mounted
};
</script>
<style>
@import url("../assets/css/techlist.css");
</style>
