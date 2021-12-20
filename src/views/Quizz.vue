<template>
  <nav-bar></nav-bar>
  <div>{{$route.params.id}}</div>
  <div>{{quizz.name}}</div>
  <div>{{quizz.description}}</div>
  <div class="word"><span v-for="(caracter, index) in currentHiddenWord" :key="index">{{caracter + " "}}</span></div>
  <div>
    <div @mouseup="guess" id="canvasDiv"></div>
    <img style="display:none;" src="" alt="" id="dessin">
    <input class="result" type="text" disabled v-model="guessText"/>
    <button @click="erase">Effacer</button>
  </div>
  <div class="end-sceen" v-if="gameIsDone">
    <h1>Bien jouer voyons voir les résultats</h1>
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
          // le quizz seras récupérer avec un fetch mais pour le moment c'est le placeholder
             quizz: {},
              currentWord : null,
              currentHiddenWord : "",
              prevWordId : 0,
              gameIsDone: false,
              dessin : "",
              guessText : ""
        }
    },
    methods:{
      startGame(){
        this.currentWord = this.quizz.words[0];
        this.currentHiddenWord = this.hiddenWord;
        setInterval(this.showCaracter, 2000);
      },
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
      changeCurrentWord(){
        let nextWordId = this.prevWordId++;
        if(this.quizz.words[nextWordId]){
          this.currentWord = this.quizz.words[nextWordId];
          this.erase();
        }else{
          clearInterval(this.showCaracter);
          this.gameIsDone = true;
          console.log("game is done")
        }
      },
      erase(){
        this.dessin.clear();
      },
      guess(){
        let imgElement = document.querySelector("#dessin");
        addAndTest(imgElement, this.dessin);
      }
    },
    beforeMount(){
      fetch(`http://127.0.0.1:3000/api/quizz/${this.$route.params.id}`)
          .then(response=>{return response.json()})
          .then(json=>{
              this.quizz = json;
              this.startGame();
          })
    },
    mounted(){
      this.dessin = new JSCanvas(
        400,
        400,
        document.querySelector("#canvasDiv"),
        "#ffffff",
        "#000000",
        5
      );
      
    },
    computed: {
      hiddenWord(){
        let hiddenWord = [];
        console.log(this.currentWord);
        for(let i = 0; i < this.currentWord.word.length; i++){
          hiddenWord.push("_");
        }
        return hiddenWord;
      },
      isCurrentWordCompleted(){
        let isCompleted;
        this.currentHiddenWord.indexOf("_") == -1 ? isCompleted = true : isCompleted = false;
        return isCompleted;
      }
    }
}
</script>

<style>

</style>