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
        <img v-if="themeDark" @click="changeTheme" src="img/Soleil.svg" class="fluide" alt="">
      </div>
      <router-view />
    </div>
  </nav>
</template>

<script>
export default {
  beforeMount(){
    if(localStorage.getItem("theme")){
      this.themeDark = localStorage.getItem("theme");
      if(localStorage.getItem("theme")){
        document.body.classList.add("dark");
      }else{
        return;
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
.container-dark{
  width:2vw;
}
.navbar-nav{
  margin-left: 30%;
}
</style>
