<template>
    <div>
		<router-view></router-view>
    </div>
</template>

<script>
import Login from './Login.vue'
import Employees from './Employees.vue'

export default {
    name: 'app',
    data: function() {
        return {
            employ: [{
                name: 'Damaris',
                gender: 'F',
                height: '1.70m'
            }, {
                name: 'Cristian',
                gender: 'M',
                height: '1.69m'
            }]
        }
    },
    components: {
        Login,
        Employees
    }
}
</script>

<style>
</style>
