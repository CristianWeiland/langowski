<template>
   <employees :employees="employees" v-if="!loading"></employees>
   <div v-else="loading" class="loader">Loading...</div>
</template>

<script>
import Employees from './Employees.vue'

// Import action to retrieve employees

console.log('App.vue rodou...');

// Export main component
export default {
/*
    created () {
        // Executa a ação
        console.log(this);
        this.getEmployees()
    },
*/
    created () {
        console.log('Chamando');
        this.$store.dispatch('getEmployees');
        console.log('Chamado');
    },
    components: {
        Employees 
    }
}
</script>

<style>
</style>
