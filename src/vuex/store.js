import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex/dist/vuex.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: ''
    }, mutations: {
        setToken(state, token) {
            state.token = token;
        }
    }
})
