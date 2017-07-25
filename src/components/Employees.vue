<template>
	<div v-if="employees && employees.length" align="center">
        <div class="pull-right">
            <button v-on:click="logout()" class="btn btn-secondary">Logout</button>
        </div>
        <div class="table-box">
            <h2>Employees:</h2>
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Job</th>
                        <th>Salary</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee in employees">
                        <td>{{employee.name}}</td>
                        <td>{{employee.age}}</td>
                        <td>{{employee.gender}}</td>
                        <td>{{employee.job}}</td>
                        <td>{{employee.salary}}</td>
                        <td>{{employee.phone}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
	</div>
	<div v-else align="center">
		<div class="alert alert-danger">{{error}}</div>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			error: 'Error: Internal Server Error',
			employees: []
		}
	},
	beforeMount: function() {
		this.getEmployees();
	}, methods: {
		getEmployees: function() {
			this.$http.post('/api/employees', { token: this.$store.state.token }).then(response => {
				this.employees = response.body.data;
			}, response => {
				this.error = 'Error: Interval server error.'
			});
		}, logout: function() {
            this.$store.commit('logout');
            this.$http.get('/api/logout').then(response => {
                this.$router.push('/login');
            });
        }
	}
}
</script>

<style>
.table-box {
    width: 90%;
    margin-top: 10px;
}
.pull-right {
    float: right;
    margin-right: 10px;
}
</style>
