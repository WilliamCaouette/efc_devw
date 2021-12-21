<template>
  <nav class="navbar">
    <div id="nav" class="container">
      <h1>
        <router-link to="/">Guess My Drawing</router-link>
      </h1>
      <ul class="navbar-nav">
        <router-link :to="'/addquizzform'" class="nav-link btn-secondary p-2">Ajouter un Quizz</router-link >
      </ul>
      <div class="container-dark">
        <img v-if="!themeDark" @click="changeTheme" src="img/Lune.svg" class="fluide" alt="">
        <img v-else @click="changeTheme" src="img/Soleil.svg" class="fluide" alt="">
      </div>
      <router-view />
    </div>
  </nav>
</template>

<script>
export default {
  /**
   * @description vérifie le Theme enregistrer dans le local storage et set la variable en conséquent
   * @author William Caouette
   */
  beforeMount(){
    if(localStorage.getItem("theme")){
      
      if(localStorage.getItem("theme") == "false"){
        this.themeDark = false;
        document.body.classList.add("dark");
      }else{
        this.themeDark = true;
      }
      
    }
    else{
      this.themeDark = false;
    }
  },
  data(){
    return{
      themeDark: false,
    }
  },
  methods:{
    /**
     * @description change le thème de la page et l'enregistre dans le localStorage
     * @author William Caouette
     */
    changeTheme(){
      console.log(this.themeDark)
      this.themeDark = !this.themeDark;
      document.body.classList.toggle("dark");
      localStorage.setItem("theme", this.themeDark);
    }
  }

};
</script>

<style scoped>
.btn-secondary{
  border-radius: 3px;
}
.fluide{
  width: 100%;
  height: auto;
}

.navbar-nav{
  margin-left: 30%;
}
</style>
