/*// 1. Define route components.
// These can be imported from other files
//const Foo = { template: '<div>foo</div>' }

const employeesComp = {
//	template: '#employees'
	template: '<div> \
		    <div v-if="!employees || employees.length == 0">No employees =/</div> \
		    <div v-if="employees.length > 0">{{employees}}</div> \
		    <div>a{{employees}}b</div> \
		</div>'
	//template: '<div> Todos os seus funcionarios vem aqui. </div>'
};

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
const routes = [
	//{ name: 'login', path: '/api/login', component: employees },
	{ name: 'employee', path: '/employees', component: employeesComp, meta: { requiresAuth: true } }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		// Route needs authentication and user was not logged in.
		// Redirect to login page, and after user submit's login,
		// redirect him to the proper route.
		if(!Auth.loggedIn) {
			next({ path: '/login', query: { redirect: to.fullPath }})
		} else { // Route needs authentication, but user was logged in.
			next();
		}
	} else { // Route does not need authentication. Go for it.
		next();
	}
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
/*var app = new Vue({
	router,
	http: {
		root: '/'
	},
    el: '#app',
    data: {
        user: '',
        pass: '',
		loginError: '',
		employees: []
    },
    methods: {
        submit: function() {
			this.$http.post('/api/login', { user: this.user, pass: this.pass }).then(function(response) {
				if(response.status == 200) {
					console.log('Sucessful login');
					router.push('/employees');
					this.loginError = '';
					this.getEmployees();
				}
			}, function(response) {
				console.log(response);
					this.getEmployees();
				if(response.status == 401) {
					console.log('Failed login: wrong credentials.');
					this.loginError = 'Error: Wrong username or password.';
				} else {
					this.loginError = 'Error: Interval server error.'
				}
			});
        }, getEmployees: function() {
			this.$http.get('/api/employees').then(function(response) {
				console.log('Employees success!');
				console.log(response);
			}, function(response) {
				console.log('Employees failure!');
				console.log(response);
			});
		}
    }
});
*/

import Vue from 'vue/dist/vue.js'
import app from './components/App.vue'
import VueResource from 'vue-resource/dist/vue-resource.js'
import store from './vuex/store'

Vue.use(VueResource);

var App = new Vue({
    store,
	http: {
		root: '/'
	},
    el: '#app',
    components: { app }
});
