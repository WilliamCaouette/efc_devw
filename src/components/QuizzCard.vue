<template>
  <article class="card-quizz">
        <router-link :to="'/quizz/' + quizz.id">Jouer</router-link>
        <div><img class="fluide" :src="quizz.img" alt=""></div>
        <div>
        <h3>{{quizz.name}}</h3>
        <p>{{quizz.description}}</p>
        </div>
    </article>
</template>

<script>
export default {
    props:['quizz']

}
</script>

<style scoped>
    
</style>