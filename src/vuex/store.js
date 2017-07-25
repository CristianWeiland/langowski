import Vue from 'vue/dist/vue.min.js'
import Vuex from 'vuex/dist/vuex.min.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: ''
    }, mutations: {
        setToken(state, token) {
            state.token = token;
        }, logout(state) {
            state.token = '';
        }
    }
})
