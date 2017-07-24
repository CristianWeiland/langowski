
import Vue from 'vue/dist/vue.js'
import App from './components/App.vue';
import VueResource from 'vue-resource/dist/vue-resource.js'

Vue.use(VueResource);

var app = new Vue({
	http: {
		root: '/'
	},
    el: '#app',
    components: { App }
});
