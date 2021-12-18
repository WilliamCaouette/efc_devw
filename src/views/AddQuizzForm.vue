<template>
    <nav-bar></nav-bar>
        <section class="container">
            <form method="POST" action="../../serveur/api/quizz">
            
        <div class="addition-form ">
            <div>
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
        <div>
            <h2>Choisissez vos words</h2>
            <div v-for="(mot, id) in words" :key="id">
                <label :for="'mot'+id">{{mot.name}}</label>
                <input @click="addWordToList(mot)" class="checkBox" type="checkbox" name="mot" :id="'mot'+id">
            </div>
        </div>
        <div>
            <input type="button" @click="addNewQuizz" value="Ajouter le Quizz">
        </div>

    </div>

    </form>
        </section>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: { NavBar },
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