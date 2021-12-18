<template>
  <article class="card-quizz">
    <div class="container">
      <h3>{{ quizz.name }}</h3>
      <p>{{ quizz.description }}</p>
    <router-link class="btn-jouer" :to="'/quizz/' + quizz.id"> Jouer au quizz </router-link>
    <div>
      <img :src="quizz.img" alt="" />
    </div>
      </div>
  </article>
</template>

<script>
export default {
  props: ["quizz"],
};
</script>

<style scoped></style>
