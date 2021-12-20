<template>
<section class="quizz-card mt-5  p-5">
  <section class="d-flex flex-wrap container">
    <article class="description">
      <h3><b>{{ quizz.name }}</b></h3>
      <p class="desc">{{ quizz.description }}</p>
      <router-link class="btn-jouer" :to="'/quizz/' + quizz.id"> Jouer au quizz </router-link>
    </article>
    <div class="flex-tier">
      <img class="img-fluid" :src="quizz.img" alt="" />
    </div>
  </section>
</section> 
</template>

<script>
export default {
  props: ["quizz"],
};
</script>

<style scoped>
.quizz-card{
  border-radius: 10px;
  background-color: #8ee9f2;
}
.desc{
  font-size: 1em;
}
</style>
