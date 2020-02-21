import Vue from 'vue'
import Vuex from 'vuex'
import fetchArticles from './modules/fetchAllArticles';

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    fetchArticles
  }
});