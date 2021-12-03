<template>
    <div class="card card-event">
        <div class="card-picture card-picture-event" v-bind:style="{ backgroundImage:'url('+getUrl(event.url)+')'}" v-if = "event"></div>
            <div class="card-title">{{event.name}}</div>
    </div>
</template>

<script>
export default ({
props: ['event', 'id'],
methods:{
    getUrl(val){
           return require('../assets/'+ val)
    }
}


})

</script>