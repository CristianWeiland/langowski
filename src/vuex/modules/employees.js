// Define state structure
const state = {
    list: []
}

// Define state mutations
const mutations = {
    GET_EMPLOYEES (state, employees) {
        // Put it into the state
        state.list = employees
    }
}

console.log('Defining modules...');

export default {
    state,
    mutations
}
