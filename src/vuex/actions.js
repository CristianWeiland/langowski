import Vue from 'vue/dist/vue.js'
import VueResource from 'vue-resource/dist/vue-resource.js'


console.log('Defining actions...');

// Está é a ação que iremos utilizar para pegar todos as pessoas
/*
export const getEmployees = ({ dispatch }) => {
    Vue.$http.get('/api/employees').then(function(response) {
        console.log('Received answer form get.');
        dispatch('GET_EMPLOYEES', res.data.results);
	});
}
*/

const req = function () {
    return Vue.http.get('/api/employees');
}

export const getEmployees = ({ dispatch }) => {
    Vue.http.get('/api/employees').then(function(response) {
        console.log('Received answer form get.');
        dispatch('GET_EMPLOYEES', res.data.results);
	});
}
/*
export const getEmployees = function( dispatch ) {
    req().then(function(response) {
        console.log('Received answer from get.');
        dispatch('GET_EMPLOYEES', res.data.results);
	});
}
*/
