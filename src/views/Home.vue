<template>
  <div class="home">
    <div class="top-bar">
      <nav-bar></nav-bar>
    </div>
    <section class="container mt-4">
      <div class="half-item">
        <h2>Qu'est-ce que GuessMyDraw</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto
          corrupti a ex placeat adipisci nostrum, doloremque velit quisquam
          consequatur aliquid impedit laboriosam necessitatibus dolorem et
          dignissimos quo esse minima eligendi molestiae labore. Minus ut aut ab
          fugit earum, ad aspernatur quaerat dolore ex harum distinctio amet
          necessitatibus ipsum consequatur voluptatem culpa sint dolorem
          possimus magnam et, nobis at corporis eaque. Deserunt, sint fugit,
          corporis soluta, quas eveniet ad tempore quisquam quae a fuga quo?
          Facere doloribus unde accusamus ut quae, nostrum laborum rerum dolorem
          nulla distinctio culpa asperiores inventore debitis at sit, provident
          qui officiis quisquam alias consequuntur aperiam?
        </p>
      </div>
      <div class="half-item">
        <img src="" alt="" />
      </div>
    </section>
    <section class="container">
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
  beforeMount(){
    fetch("http://127.0.0.1:3000/api/quizz")
            .then(response=>{return response.json()})
            .then(json=>{
                this.quizzList = json;
            })
  },
};
</script>
