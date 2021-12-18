<template>
  <div class="row list-quizz p-2">
    <div class="col-md-6">
      <div class="d-flex flex-column align-items-start">
        <h3><b>{{ quizz.name }}</b></h3>
      <p>{{ quizz.description }}</p>
    <router-link class="btn-jouer" :to="'/quizz/' + quizz.id"> Jouer au quizz </router-link>
      </div>
      <div class="p-2 d-none d-md-block">
      <img class="img-fluid" :src="quizz.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quizz"],
};
</script>

<style scoped></style>
