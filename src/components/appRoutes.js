import Login from './Login.vue'
import Employees from './Employees.vue'

export const routes = [
	{ name: 'login', path: '/login', component: Login },
	{ name: 'employees', path: '/employees', component: Employees, meta: { requiresAuth: true } }
]
