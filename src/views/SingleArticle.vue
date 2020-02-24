<template>
    <div>
        <GetSingleArticle v-bind:slug="slug" />
    </div>
</template>

<script>

import GetSingleArticle from '../components/GetSingleArticle'
export default {
    name: 'SingleArticle',
    components: {
        GetSingleArticle
    },
    data () {
        return {
            slug: this.$route.params.slug
        }
    }

}
</script>

<style scoped>

</style>