<template>
  <nav-bar></nav-bar>
  <section class="mt-5" :class="gameIsStart ? 'hidden': 'display'">
    <h2 class="text-center">En Chargement ...</h2>
  </section>
  <section :class="gameIsStart && !gameIsDone ? 'display': 'hidden'">
    <div class="container mt-5 d-flex flex-column align-items-center">
      <h2 class="col-12 text-center">{{quizz.name}}</h2>
    <div>{{points}}/{{this.nbWords}} points</div>
    <div class="word "><span v-for="(caracter, index) in currentHiddenWord" :key="index">{{caracter + " "}}</span></div>
    <div>
      <div @touchend="guess" @mouseup="guess" id="canvasDiv"></div>
      <img style="display:none;" src="" alt="" id="draw">
      <input class="result" type="text" disabled>
      <button @click="erase">Effacer</button>
    </div>
    </div>
    
  </section>
  
  <div class="end-sceen" v-if="gameIsDone">
    <h1>Bien jouer voyons voir les résultats</h1>
    <div>{{points}}/{{this.nbWords}} points</div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import NavBar from '../components/NavBar.vue';
import main from '../../public/scripts/main.js'
export default {
  components: { NavBar },
    data(){
        return{
             quizz: {},
              currentWord : null,
              currentHiddenWord : "",
              prevWordId : 0,
              gameIsDone: false,
              draw : "",
              points: 0,
              gameIsStart: false,
        }
    },
    methods:{
      /**
       * @description lance la boucle de jeu
       * @author William Caouette
       */
      startGame(){
        this.gameIsStart = true;
        this.currentWord = this.quizz.words[0];
        this.currentHiddenWord = this.hiddenWord;
        setInterval(this.showCaracter, 2000);
      },
      /**
       * @description affiche les caractères un à un
       * @author William Caouette
       */
      showCaracter(){
        if(!this.isCurrentWordCompleted){
            let index;
            let caracterIsShow = false;
          do{
            
            index = Math.floor(Math.random() * this.currentHiddenWord.length);
            caracterIsShow = false;
            if(this.currentHiddenWord[index] == "_" || this.isCurrentWordCompleted){
              this.currentHiddenWord[index] = this.currentWord.word[index];
              caracterIsShow = true;
            }
            else{
              return
            }
          }while(!caracterIsShow)
        }
        else{
          this.currentWord.isValidate = false;
          clearInterval(this.showCaracter);
          this.changeCurrentWord();
          this.currentHiddenWord = this.hiddenWord;
        }
        
      },
      /**
       * @description change le mot actuel pour le prochain
       * @author William Caouette
       */
      changeCurrentWord(){
        let nextWordId = this.prevWordId +=1;
        console.log(nextWordId);
        if(this.quizz.words[nextWordId]){
          this.currentWord = this.quizz.words[nextWordId];
          this.erase();
        }else{
          clearInterval(this.showCaracter);
          this.gameIsDone = true;
          console.log("game is done")
        }
      },

      /**
       * @description efface le canvas en utilisant la librairie de Jean-Michel
       * @author William Caouette
       */
      erase(){
        this.draw.clear();
      },

      /**
       * @description réagit au mouseUp sur le canvas et fait en sorte que l'IA classifie le dessin actuel
       * fait référence à addAndTest dans le script main.js
       * @author William Caouette
       */
      guess(){
        let imgElement = document.querySelector("#draw");
        addAndTest(imgElement, this.draw);
        setTimeout(this.checkAnswer, 1000)
      },

      /**
       * @description vérifie la réponce de l'IA vs le mot actuelle et ajoute les points s'il le faut
       * @author William Caouette
       */
      checkAnswer(){
        if(document.querySelector(".result").value == this.currentWord.word){
          this.points += 1;
          clearInterval(this.showCaracter);
          this.changeCurrentWord();
          this.currentHiddenWord = this.hiddenWord;
        }
        else{
          return
        }
      }
    },
    /**
     * @description fetch les données à l'API sur le serveur
     * @author William Caouette
     */
    beforeMount(){
      fetch(`http://127.0.0.1:3000/api/quizz/${this.$route.params.id}`)
          .then(response=>{return response.json()})
          .then(json=>{
              this.quizz = json;
              setTimeout(this.startGame, 3000);
          })
    },
    /**
     * @description crée l'objet draw qui est une référence au canvas à l'aide de la librairy de Jean-Michel
     * @author William Caouette
     */
    mounted(){
      this.draw = new JSCanvas(
        400,
        400,
        document.querySelector("#canvasDiv"),
        "#1111",
        "#000000",
        5
      );
      
    },
    computed: {
      /**
       * @description créé le tableau hiddenword qui est chacune des lettres du mot actuel, mais caché
       * @author William Caouette
       * @returns le mot caché
       */
      hiddenWord(){
        let hiddenWord = [];
        for(let i = 0; i < this.currentWord.word.length; i++){
          hiddenWord.push("_");
        }
        return hiddenWord;
      },
      /**
       * @description retourne si le mot est entièrement affiché où non
       * @author William Caouette
       * @returns boolean qui représente si le mot est entièrement affiché ou non
       */
      isCurrentWordCompleted(){
        let isCompleted;
        this.currentHiddenWord.indexOf("_") == -1 ? isCompleted = true : isCompleted = false;
        return isCompleted;
      },
      /**
       * @description retourne Le nombre de mots dans le quizz actuel
       * @author William Caouette
       * @returns nombre de mots dans le quizz
       */
      nbWords(){
        if(this.quizz.words){
          return this.quizz.words.length;
        }
        else{
          return "?"
        }
      }
    }
}
</script>

<style >
.hidden{
  display: none;
}
.word{
  width:100%,
  
}
body.dark{
  color: #f2f2f2;
}
</style>