<template>
  <router-view />
</template>

<style>
/*-- Fonts --*/

@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

/*-- Navigation --*/

.title {
  color: #eee;
}
h1 a {
  text-decoration: none;
  color: #eee;
}

h1 a:hover {
  text-decoration: none;
  color: #eee;
}
.btn-secondary {
  background-color: #4fd3a2;
  border: none;
  text-decoration: none;
  transition: all 225ms ease-in-out;
}

.btn-secondary:hover {
  background-color: #2db482;
}
nav {
  background-color: #08454c;
}

/*-- Explication : Icône / Bloc peinture / Texte --*/

.icone {
  width: 25%;
}

.explication-text {
  font-family: "Roboto", sans-serif;
  width: 30%;
  font-size: 1.3em;
  text-align: justify;
  right: 48%;
  color: #fff;
  top: 38%;
}
.paint-block {
  float: right;
  left: 30%;
  width: 100%;
  height: 60vh;
  position: relative;
  background-image: url("../public/img/bloc_2.svg");
  background-repeat: no-repeat;
}

/* Liste de quizz : */

.list-quizz {
  background-color: #89f7f7;
  border-radius: 10px;
  padding: 10px;
  display: block;
}

.card-quizz {  
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
}

.card-quizz p {
}

.card-quizz img {
  width: 50%;
  padding: 10px;
  background-color: #2e8da3; 
}

.btn-jouer {
  position: relative;
  top: 8%;
  padding: 10px;
  border-radius: 6px;
  color: #fff;
  background-color: #2db482;
}

/* Media Query */
@media screen and (max-width: 1500px) {
  .icone {
    width: 25%;
    right: 55%;
  }
  .paint-block {
    width: 100%;
    height: 50vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .explication-text {
    width: 30%;
    font-size: 0.9em;
    text-align: justify;
    right: 34%;
    top: 40%;
  }
}

@media screen and (max-width: 991px) {
  .icone {
    width: 25%;
    right: 55%;
  }
  .paint-block {
    width: 100%;
    height: 40vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .explication-text {
    width: 40%;
    font-size: 1em;
    text-align: justify;
    right: 28%;
    top: 35%;
  }

  /* Liste de quizz : */

.list-quizz {
  display: block;
}
}
@media screen and (max-width: 767px) {
  .icone {
    width: 25%;
    right: 65%;
  }
  .paint-block {
    width: 100%;
    height: 40vh;
    background-repeat: no-repeat;
    background-image: url("../public/img/bloc_3_huge.png");
    background-position: center;
    background-size: contain;
  }
  .explication-text {
    width: 66%;
    font-size: 0.9em;
    text-align: justify;
    right: 15%;
    top: 35%;
  }
  .btn-jouer {
  top: 10%;
  padding: 8px;
  border-radius: 6px;
}
}
</style>
