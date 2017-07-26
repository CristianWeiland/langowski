<template>
    <div>
        <div align="center">
            <div class="login-form">
                <div class="form-control">
                    <h2>Langowski Exercise</h2>
					<div v-if="loginError" class="alert alert-danger big-font">{{loginError}}</div>
                    <div style="margin-top: 15px" class="form-group big-font">Username: <input v-model="user"/></div>
                    <div class="form-group big-font">Password: <input type="password" v-model="pass"/></div>
                    <button class="btn btn-secondary" v-on:click="submit">Log In</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data: function() {
		return {
			loginError: '',
			user: '',
			pass: ''
		}
	},
    computed: {
        token() {
            return this.$store.state.token;
        }
    }, methods: {
        submit: function() {
			this.$http.post('/api/login', { user: this.user, pass: this.pass }).then(function(response) {
				if(response.status == 200) {
					this.loginError = '';
					this.$store.commit('setToken', response.body.token);
					this.$router.push('/employees');
				}
			}, function(response) {
				if(response.status == 401) {
					this.loginError = 'Error: Wrong username or password.';
				} else {
					this.loginError = 'Error: Interval server error.'
				}
			});
		}
    }
}
</script>

<style>
.login-form {
	margin-top: 30px;
	width: 50%;
}
.big-font {
	font-size: 20px;
}
</style>
