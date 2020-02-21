<template>
  <div>
    <h1>Articles</h1>
    <div class="cards">
      <div class="card" v-for="article in allArticles.results" v-bind:key="article.id">
        <v-card max-width="345" class="mx-auto">
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ article.title }}</v-list-item-title>
              <v-list-item-subtitle>by {{ article.author.username }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

          <v-card-text>{{ article.description }}</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">Read</v-btn>
            <v-btn text color="deep-purple accent-4">Bookmark</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "GetArticles",
  computed: mapGetters(["allArticles"]),
  created() {
    this.fetchArticles();
  },
  methods: {
    ...mapActions(["fetchArticles"])
  }
};
</script>

<style scoped>
.cards, h1 {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
    margin: 20px 40px;
}
</style>