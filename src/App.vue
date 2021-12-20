<template>
  <router-view />
</template>

<style>

body {
  background-image: url("../public/img/paint_background.jpg");
  background-color: #cccccc; 
  height: auto;
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
}

/*-- Fonts --*/

@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

/*-- Navigation : Titre / Bouton d'ajout --*/
body{
  overflow-x:hidden ;
}

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
  width: 28%;
  font-size: 1em;
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
  background-size: contain;
}

/*-- Liste de quizz : Nom du quizz / Description / Bouton jeu / Image / --*/

.list-quizz {
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
}

.description {
  margin: 30px 50px 0 0px;
  flex-basis: 52%;
}

.flex-tier { 
  flex-basis: 32%;
}

.btn-jouer {
  padding: 10px;
  border-radius: 6px;
  font-family: "Roboto", sans-serif;
  color: #eee;
  background-color: #2db482;
} 
.btn-jouer:hover{
  color: #fff;
  text-decoration: none;
}

 .list-quizz h3 {
  font-size: 1.8em;
  font-family: 'Orbitron', sans-serif;
  color: #fff;
}

.list-quizz p {
  font-size: 1.4em;
  font-family: 'Orbitron', sans-serif;
  color: #fff;
}

/*-- Formulaire de quizz : --*/

.form-section {
  display: flex;
  width: 100%;
  margin-top: 2%;
  background-color: #f2f2f2;
  border-radius: 10px;
  color: #0E4D5E;
  padding: 5px;
  justify-content: space-evenly;
}

.information-form {
  width: 50%;
  margin: 0 auto;
  float: left;
  padding: 20px;

}

.word-form {
  width: 50%;
  margin: 0 auto;
  float: right;
  padding: 20px;
}

label {
  padding: 10px;
}
.explication-text {
  width: 30%;
    font-size: 1em;
    text-align: justify;
    right: 34%;
    top: 40%;
}
.btn-ajouter {
  width: 100%;
  cursor: pointer;
  border: none;
  padding: 10px;
  border-radius: 6px;
  font-family: "Roboto", sans-serif;
  color: #eee;
  background-color: #2db482;
  justify-content: center;
}

/*-- Media Query --*/

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
    font-size: 0.8em;
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
      display: none;
    }
    .paint-block {
      width: 100%;
      left: 0;
      height: 40vh;
      background-repeat: no-repeat;
      background-image: url("../public/img/bloc_3_huge.png");
      background-position: center;
      background-size: contain;
      justify-content: center;
    }
    .explication-text {
      width: 66%;
      font-size: 0.9em;
      text-align: justify;
      right: 15%;
      top: 35%;
    }
  .btn-jouer {
    padding: 10px;
    border-radius: 6px;
    position: absolute;
  } 
  .list-quizz {
    margin: 0 ;
    margin-bottom: 0;
    padding: 6px;
  }
  .flex-tier { 
    flex-basis: 100%;
  }
  .word-form{
    width: 100%;
  }
  .desc{
    display: none;
  }
}
</style>
