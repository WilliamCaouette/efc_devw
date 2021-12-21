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
          // le quizz seras récupérer avec un fetch mais pour le moment c'est le placeholder
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
      startGame(){
        this.gameIsStart = true;
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
        this.draw.clear();
      },
      guess(){
        let imgElement = document.querySelector("#draw");
        addAndTest(imgElement, this.draw);
        setTimeout(this.checkAnswer, 1000)
      },
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
    beforeMount(){
      fetch(`http://127.0.0.1:3000/api/quizz/${this.$route.params.id}`)
          .then(response=>{return response.json()})
          .then(json=>{
              this.quizz = json;
              setTimeout(this.startGame, 3000);
          })
    },
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
      },
      nbWords(){
        return this.quizz.words.length;
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