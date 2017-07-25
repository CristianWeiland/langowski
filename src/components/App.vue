<template>
    <div>
        <!--<login></login>-->
        Funcionarios:
        <employees :employees="employ"></employees>
    </div>
</template>

<script>
import Employees from './Employees.vue'

// Import action to retrieve employees

// Export main component
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
        Employees
        //, Login
    }
}
</script>

<style>
</style>
