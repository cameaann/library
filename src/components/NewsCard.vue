<template>
    <div class="news-card">
        <p v-if="item.content" class="news-card__formatted" v-bind:class="{ show : isVisible}">{{ formatString(item.content) }} </p>
        <p v-if="item.content" class="news-card__showMore" v-bind:class="{ show : !isVisible }" >{{item.content}}</p>
         <div class="button-text" @click="toggleText()">читать подробнее</div>
    </div>

</template>

<script>
export default ({
props: ['item'],
data(){
    return{
        isVisible: true
    }
},
methods:{
    formatString(val){
        return val.split(" ").slice(0, 20).join(" ").concat("...");
    },
    toggleText(){
        this.isVisible = !this.isVisible;
    }
}


})

</script>
