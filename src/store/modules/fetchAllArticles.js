import axios from 'axios';

const state = {
    articles: {},
    article: {}
}

const getters = {
    allArticles:(state) => state.articles,
    singleArticle:(state) => state.article
};

const actions = {
    async fetchArticles({ commit }) {
        const res = await axios.get(
            'https://ah-backend-athena-staging.herokuapp.com/api/articles'
            );
        commit('GET_ALL_ARTICLES', res.data.articles);
    },

    async fetchSingleArticle({ commit }, slug) {
        const res = await axios.get(
            `https://ah-backend-athena-staging.herokuapp.com/api/articles/${slug}`
            );
        commit('GET_SINGLE_ARTICLE', res.data);
    }
}


const mutations = {
    GET_ALL_ARTICLES:(state, articles) => (state.articles = articles),
    GET_SINGLE_ARTICLE:(state, article) => (state.article = article)
}


export default {
    state,
    getters,
    actions,
    mutations
}