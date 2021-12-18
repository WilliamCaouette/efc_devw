<template>
<section class="list-quizz mb-5 ">
  <section class="d-flex flex-wrap container">
    <article class="description">
      <h3><b>{{ quizz.name }}</b></h3>
      <p>{{ quizz.description }}</p>
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

<style scoped></style>
