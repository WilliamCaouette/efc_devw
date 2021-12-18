<template>
  <div class="home">
    <div class="top-bar">
      <nav-bar></nav-bar>
    </div>
    <section class="container mt-4">
      <div class="position-relative">
        <!--Section de présentation du Jeu-->
        <div class="block-text">
          <h2 class="explication-text">Explication</h2>

          <div class="paint-block">
            <p class="position-absolute explication-text">
              Guess My Drawing est un jeu de dessin où le joueur doit déchiffrer un
              mot dans un temps imparti et le faire deviner à l'aide d'un
              dessin.
            </p>
          </div>
        </div>
      </div>

      <div class="icone position-absolute">
        <img src="img/Rem-1.svg" alt="Rem-1" class="float-left" />
      </div>
    </section>
    <section class="container quizz-box">
      <h2>Liste de nos Quizz</h2>
      <h3 v-if="!quizzList[0]">Aucun quizz n'as encore été créé</h3>
      <div class="list-quizz">
        <quizz-card
          v-for="quizz in quizzList"
          :key="quizz.id"
          class="card-quizz"
          :quizz="quizz"
        ></quizz-card>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import QuizzCard from "../components/QuizzCard.vue";
export default {
  components: { QuizzCard, NavBar },
  name: "Home",
  data() {
    return {
      quizzList: [],
    };
  },
  beforeMount() {
    fetch("http://127.0.0.1:3000/api/quizz")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.quizzList = json;
      });
  },
};
</script>
