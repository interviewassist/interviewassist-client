<template lang="html">
    <section class="index">
        <img class="index__logo" src="../assets/logo2.png">
        <article class="index__innerwrap">
            <h1 class="index__title">
                <p class="index__title--top">개발자로서 직장을 찾고 계신가요?</p>
                <p class="index__title--bottom">면접에서 당신이 알아야할 것들이 있습니다</p>
            </h1>
            <div class="index__footer">
                <button class="index__signup index__button" >회원가입</button>
                <a class="index__enter index__button" href="main">가입없이 둘러보기</a>
            </div>
        </article>
    </section>
</template>

<script>
export default {
  name: "IndexPage"
};
</script>
<style scoped>
@import url("../assets/css/index.css");
</style>