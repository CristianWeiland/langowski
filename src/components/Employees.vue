<template>
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
</template>

<script>
console.log('Employees.vue rodou...');

export default {
    props: {
        employees: Array
    }
}
</script>

<style>
</style>
