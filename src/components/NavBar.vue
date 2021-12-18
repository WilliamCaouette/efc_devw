<template>
  <nav class="navbar">
    <div id="nav" class="container">
      <h1>
        <router-link to="/">Guess My Drawing</router-link>
      </h1>
      <ul class="navbar-nav ms-auto">
        <router-link :to="'/addquizzform'" class="nav-link btn-secondary p-2"
          >+Ajouter un Quizz</router-link
        >
      </ul>
      <router-view />
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped></style>
