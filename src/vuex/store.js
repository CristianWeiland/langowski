import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex/dist/vuex.js'

import { getEmployees } from './actions.js'

import employees from './modules/employees'

console.log('Creating store...');

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        getEmployees
    },
    getters: {
        employees: ({ employees }) => employees.list,
        loading: ({ employees }) => employees.list.length === 0
    },
    modules: {
        employees
    }
})
