<template>
    <nav-bar></nav-bar>
        <section class="container p-5 form-section">
            <form method="POST" action="../../serveur/api/quizz">
                <div class="container container-items-form">
                    <div class="information-form ">
                        <h2>Informations de base du Quizz</h2>
                    <div>
                        <label for="name">Nom du quizz:</label>
                        <input type="text" id="name">
                    </div>
                    <div>
                        <label for="description">Description:</label>
                        <textarea name="description" id="description" cols="30" rows="10" style="resize:none"></textarea>
                    </div>
                    </div>
                    <div class="word-form">
                        <h2>Choisissez vos words</h2>
                        <div v-for="(mot, id) in words" :key="id">
                            <label :for="'mot'+id">{{mot.name}}</label>
                            <input @click="addWordToList(mot)" class="checkBox" type="checkbox" name="mot" :id="'mot'+id">
                        </div>
                    </div>
                    <div class="send-form ">
                        <input class="btn-ajouter text-center" @click="addNewQuizz" value="Ajouter le Quizz">
                    </div>
                </div>
            </form>
        </section>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: { NavBar },
  /**
   * @description fetch les mots dans la base de donnée
   * @author William Caouette
   */
    beforeMount(){
        fetch("http://127.0.0.1:3000/api/words")
            .then(response=>{return response.json()})
            .then(json=>{
                json.forEach(word=>{
                    this.words.push({name: word, isChoose:false});
                })
            })
    },
    data(){
        return {
            words : [],
            list:[]
        }
    },
    methods:{
        /**
         * @description ajoute un mot à la liste de mot selectionner en empêchant d'aller au dessus du maximum
         * @author William Caouette
         * @param {string} word le mot sur lequel on à cliqué
         */
        addWordToList(word){
            if(word.isChoose == false && this.list.length < 5){
                this.list.push(word.name);
                word.isChoose = true;
                if(this.list.length ==5){
                    document.querySelectorAll(".checkBox").forEach((chck)=>{
                        if(!chck.checked){
                            chck.disabled = true
                        };
                    })
                };
            }
            else{
                this.list = this.list.filter((wordInList)=>{
                    return wordInList != word.name;
                });
                word.isChoose = false;
                document.querySelectorAll(".checkBox").forEach((chck)=>{
                        chck.disabled = false;
                })
            }
        },
        /**
         * @description fetch les données à l'API pour ajouter le nouveau quizz à la base de donnée
         * @author William Caouette
         */
          addNewQuizz(){
            let newQuizz = {
                id: "",
                name: document.querySelector("#name").value,
                description: document.querySelector("#description").value,
                img: "img/placeholder.jpg",
                words: []
            }
            this.choseWords.forEach(word=>{
                newQuizz.words.push({word:word.name,isValidate:false});
            })
            console.log(newQuizz)
            fetch('http://127.0.0.1:3000/api/quizz', {
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newQuizz)
            });
        }
    },
    computed:{
        /**
         * @description retourne les mots selectionnées
         * @author William Caouette
         * @returns liste des mots choisis
         */
        choseWords(){
            return this.words.filter((word)=>{
                return word.isChoose
            })
        }
    }
}
</script>

<style>


</style>