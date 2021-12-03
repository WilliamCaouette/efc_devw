<template>
    <form method="POST" action="../../serveur/api/quizz">
    <div>
        <div>
            <label for="name">Nom du quizz:</label>
            <input type="text" id="name">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea name="description" id="description" cols="30" rows="10" style="resize:none"></textarea>
        </div>
        <div>
            <div v-for="mot in mots" :key="mot.id">
                <label for="mot">{{mot.mot}}</label>
                <input type="checkbox" name="mot" id="mot">
            </div>
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
            ]
        }
    }
}
</script>

<style>

</style>