<template>
  <div class="home">
    <GetArticles />
  </div>
</template>

<script>
// @ is an alias to /src
import GetArticles from '@/components/GetArticles.vue'

export default {
  name: 'Home',
  components: {
    GetArticles
  }
}
</script>
