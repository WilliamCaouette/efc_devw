<template>
  <div>{{$route.params.id}}</div>
  <div>{{quizz.name}}</div>
  <div>{{quizz.description}}</div>
  <div class="word"><span v-for="caracter in currentHiddenWord" :key="caracter">{{caracter + " "}}</span></div>
  <div>
    <canvas width="100px" height="100px"></canvas>
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
              currentHiddenWord : ""
        }
    },
    methods:{
      showCaracter(){
        if(!this.isCurrentWordCompleted){
            let index;
            let caracterIsShow = false;
          do{
            index = Math.floor(Math.random * this.currentHiddenWord.length);
            caracterIsShow = false;
            if(this.currentHiddenWord[index] != "_"){
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
        }
        
      },

    },
    beforeMount(){
      //fetch l'api avec l'id du quizz
    },
    mounted(){
      this.currentWord = this.quizz.words[0];
      this.currentHiddenWord = this.hiddenWord;
      console.log(this.currentHiddenWord);
      setInterval(this.showCaracter, 2000);

    },
    computed: {
      hiddenWord(){
        let hiddenWord = [];
        for(let i = 0; i < this.currentWord.word.length; i++){
          hiddenWord.push("_");
        }
        return hiddenWord;
      },
      isCurrentWordCompleted(){
        let isCompleted;
        this.currentHiddenWord.indexOf("_") == -1 ? isCompleted = true : isCompleted = false;
      }
    }
}
</script>

<style>

</style>