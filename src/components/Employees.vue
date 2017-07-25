<template>
	<div v-if="employees && employees.length" align="center">
		<table>
			<thead>
				<tr>
					<th>Nome</th>
					<th>Genero</th>
					<th>Altura</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="employee in employees">
					<td>{{employee.name}}</td>
					<td>{{employee.gender}}</td>
					<td>{{employee.height}}</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div v-else align="center">a{{employees}}b
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
		}
	}
}
</script>

<style>
</style>
