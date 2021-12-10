<template>
    <form method="POST" action="../../serveur/api/quizz">
        <div>
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
            <h2>Choisissez vos mots</h2>
            <div v-for="(mot, id) in mots" :key="id">
                <label :for="'mot'+id">{{mot.mot}}</label>
                <input @click="addWordToList(mot)" class="checkBox" type="checkbox" name="mot" :id="'mot'+id">
            </div>
        </div>
        <div>
            <input type="button" value="Ajouter le Quizz">
        </div>

    </div>

    </form>
</template>

<script>
export default {
    data(){
        return {
            mots : [
                {
                    id:0,
                    mot: "mot1",
                    isChoose : false
                },
                {
                    id:1,
                    mot: "mot2",
                    isChoose : false
                },
                {
                    id:2,
                    mot: "mot3",
                    isChoose : false
                },
                {
                    id:3,
                    mot: "mot313",
                    isChoose : false
                },
                {
                    id:4,
                    mot: "mot4",
                    isChoose : false
                },
                {
                    id:5,
                    mot: "mot5",
                    isChoose : false
                },
                {
                    id:6,
                    mot: "mot6",
                    isChoose : false
                },
                {
                    id:7,
                    mot: "mot7",
                    isChoose : false
                },
                {
                    id:8,
                    mot: "mot8",
                    isChoose : false
                },
                {
                    id:9,
                    mot: "mot9",
                    isChoose : false
                },
                {
                    id:10,
                    mot: "mot10",
                    isChoose : false
                },
                {
                    id:11,
                    mot: "mot11",
                    isChoose : false
                },
                {
                    id:12,
                    mot: "mot12",
                    isChoose : false
                },

            ],
            list:[]
        }
    },
    methods:{
        addWordToList(word){
            if(word.isChoose == false && this.list.length < 10){
                this.list.push(word.mot);
                word.isChoose = true;
                if(this.list.length ==10){
                    document.querySelectorAll(".checkBox").forEach((chck)=>{
                        if(!chck.checked){
                            chck.disabled = true
                        };
                    })
                };
            }
            else{
                this.list = this.list.filter((wordInList)=>{
                    return wordInList != word.mot;
                });
                word.isChoose = false;
                document.querySelectorAll(".checkBox").forEach((chck)=>{
                        chck.disabled = false;
                })
            }
        }
    }
}
</script>

<style>

</style>