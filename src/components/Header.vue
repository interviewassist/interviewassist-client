<template>
  <header class="header__wrap">
    <a href="main" class="header__link">
      <img class="header__logo" src="../assets/logo2.png" />
    </a>
    <div class="header__controlset">
      <button class="header__movecontext">
        <i class="material-icons">person</i>
      </button>
      <button class="header__movetechlist">
        <i class="material-icons">menu</i>
      </button>
    </div>
  </header>
</template>

<script>
import { Mounted } from "../assets/js/header";
export default {
  name: "Header",
  mounted: Mounted
};
</script>
<style>
@import url("../assets/css/header.css");
</style>



