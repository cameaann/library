<template>
  <div class="card card-small">
    <div class="card-picture card-picture__small" v-bind:style="{ backgroundImage:'url('+getUrl(club.url)+')'}"></div>
    <div class="card-content">
      <div class="card-title">{{club.name}}</div>
      <div class="card-text">
        {{club.content}}
      </div>
    </div>
  </div>
</template>

<script>
export default ({
props: ['club', 'id'],
methods:{
    getUrl(val){
           return require('../assets/'+ val)
    }
}

})

</script>