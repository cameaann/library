<template>
    <div class="card card-info">
        <div class="card-picture card-picture-big" v-bind:style="{ backgroundImage:'url('+getUrl(card.url)+')'}" v-if = "card"></div>
            <div class="card-title">{{card.name}}</div>
    </div>
</template>


<script>
export default ({
props: ['card', 'id'],
methods:{
    getUrl(val){
           return require('../assets/'+ val)
    }
}

})

</script>

