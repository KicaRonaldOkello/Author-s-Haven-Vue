<template>
  <div>
    <h1>{{singleArticle.title}}</h1>
    <h4>by {{singleArticle.author.username}}</h4>
    <div class="body" v-html="singleArticle.body"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "GetSingleArticle",
  props: ["slug"],
  computed: mapGetters(["singleArticle"]),
  created() {
    this.fetchSingleArticle(this.slug);
  },
  methods: {
    ...mapActions(["fetchSingleArticle"])
  }
};
</script>

<style scoped>

.body {
    margin: 0px 120px;
}
h1, h4 {
    display: flex;
    justify-content: center;
    margin: 20px 0px;
}
</style>