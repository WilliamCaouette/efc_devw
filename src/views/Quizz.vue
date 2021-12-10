<template>
  <div>{{$route.params.id}}</div>
  <div>{{quizz.name}}</div>
  <div>{{quizz.description}}</div>
  <div class="word"><span v-for="(caracter, index) in currentHiddenWord" :key="index">{{caracter + " "}}</span></div>
  <div>
    <canvas width="100px" height="100px"></canvas>
  </div>
  <div class="end-sceen" v-if="gameIsDone">
    <h1>Bien jouer voyons voir les résultats</h1>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
export default {
    data(){
        return{
          // le quizz seras récupérer avec un fetch mais pour le moment c'est le placeholder
             quizz: {
                id:0,
                name: "title",
                description: "lorem blalabblalbalabllablablabllba",
                words:[
                  {word: "mot1", isValidate:false},
                  {word: "mot2", isValidate:false},
                  {word: "mot3", isValidate:false},
                ]
              },
              currentWord : null,
              currentHiddenWord : "",
              prevWordId : 0,
              gameIsDone: false
        }
    },
    methods:{
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
        }else{
          clearInterval(this.showCaracter);
          this.gameIsDone = true;
          console.log("game is done")
        }
      }
    },
    beforeMount(){
      //fetch l'api avec l'id du quizz
    },
    mounted(){
      this.currentWord = this.quizz.words[0];
      this.currentHiddenWord = this.hiddenWord;
      setInterval(this.showCaracter, 2000);

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