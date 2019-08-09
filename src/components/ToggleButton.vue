<template>
  <section class="listToggle">
    <div class="listToggle__innerwrap">
      <button class="listToggle__button listToggle__single listToggle__single--selected z20">
        <i class="material-icons">view_day</i>
      </button>
      <button class="listToggle__button listToggle__double z20">
        <i class="material-icons">dashboard</i>
      </button>
      <div class="listToggle__now"></div>
    </div>
  </section>
</template>
<script>
import { Mounted } from "../assets/js/toggleButton";
export default {
  name: "ToggleButton",
  data: () => ({}),
  mounted: Mounted
};
</script>
<style>
@import url("../assets/css/togglemenu.css");
</style>


