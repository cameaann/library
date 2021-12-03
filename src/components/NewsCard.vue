<template>
    <div class="news-card">
        <p v-if="item.content">{{ formatString(item.content) }} </p>
         <div class="button-text">читать подробнее</div>
    </div>

</template>

<script>
export default ({
props: ['item'],
methods:{
    formatString(val){
        return val.split(" ").slice(0, 20).join(" ").concat("...");
    }
}


})

</script>
