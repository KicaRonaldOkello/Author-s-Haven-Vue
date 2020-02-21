import axios from 'axios';

const state = {
    articles: {}
}

const getters = {
    allArticles:(state) => state.articles
};

const actions = {
    async fetchArticles({ commit }) {
        const res = await axios.get(
            'https://ah-backend-athena-staging.herokuapp.com/api/articles'
            );
        commit('GET_ALL_ARTICLES', res.data.articles);
    }
}


const mutations = {
    GET_ALL_ARTICLES:(state, articles) => (state.articles = articles)
}


export default {
    state,
    getters,
    actions,
    mutations
}