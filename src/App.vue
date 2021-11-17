<template>
  <div>
    <LibHeader/>
    <router-view/>
  </div>
</template>

<script>

import LibHeader from '@/components/LibHeader.vue'

export default ({
  name: 'App',
  components: {
    LibHeader
  }
})

</script>
