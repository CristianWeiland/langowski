import Vue from 'vue/dist/vue.js'
import App from './components/App.vue';
import VueRouter from 'vue-router/dist/vue-router.js';
import VueResource from 'vue-resource/dist/vue-resource.js'
import store from './vuex/store.js'
import { routes as AppRoutes } from './components/appRoutes.js';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
	{
		path: '/',
		component: App,
		children: AppRoutes
	}, {
		path: '*',
		redirect: '/login'
	}
]

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		// Route needs authentication and user was not logged in.
		// Redirect to login page, and after user submit's login,
		// redirect him to the proper route.
		var token = router.app.$store.state.token;

		if(token) {
			// Check if token is valid
			return router.app.$http.post('/api/token', { token: token }).then(function(response) {
				if(response.status == 200) {
					next();
				}
			}, function(response) {
				if(response.status == 401) {
					console.log('Failed login: invalid token.');
					this.loginError = 'Error: Invalid Token.';
				} else {
					this.loginError = 'Error: Interval server error.'
				}
				next({ path: '/login' });
			});
		}

		// User does not have a token. Redirect to login page.
		next({ path: '/login' });
	} else { // Route does not need authentication. Go for it.
		next();
	}
});

var app = new Vue({
	http: {
		root: '/'
	},
    el: '#app',
    store,
	router,
    components: { App }
});
