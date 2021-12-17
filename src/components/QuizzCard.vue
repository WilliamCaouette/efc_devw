<template>
  <article class="card-quizz container">
    >
    <div><img class="container" :src="quizz.img" alt="" /></div>
    <div>
      <h3>{{ quizz.name }}</h3>
      <p>{{ quizz.description }}</p>
    </div>
    <router-link class="btn-jouer" :to="'/quizz/' + quizz.id"
      >Jouer</router-link
    >
  </article>
</template>

<script>
export default {
  props: ["quizz"],
};
</script>

<style scoped></style>
