<script setup>
    import { ref } from 'vue';

    const value = ref(null);
    const selectedRole = ref();
    const username_1 = "hola"

    const roles = ref([
    { name: 'ADMINISTRADOR', code: 'AM' },
    { name: 'AUXILIAR', code: 'AX' },
    { name: 'TECNICO', code: 'TEC' },
    { name: 'AYUDANTE'},
])
</script>

<template>
    <div class="background-addUser">
    <h1 style="text-align: center;">Lista de Empleados</h1>
    <br>
    <br>
    <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cargo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="empleado in empleados" :key="empleado.id">
                    <td>{{ empleado.username }}</td>
                    <td>{{ empleado.role }}</td>
                    <td>
                        <button class="btn btn-danger mx-2" @click="$event => deleteEmpleado(empleado.id)">Delete</button>
                    </td>
                </tr>

            </tbody>
        </table>
    <br>
    <br>

    <img src="@/assets/images/checkUp.png" id="power-2"/>

</div>
</template>

<script >


export default {

    name: 'viewEmpleados',
    data(){
        return{
            empleados: []
        }
    },
    methods: {
        getEmpleados(){
            fetch('http://localhost:8080/users')
            .then(res => res.json())
            .then(data => {
                this.empleados = data
                console.log(data)
            })
        },

        deleteEmpleado(id){
        fetch(`http://localhost:8080/users/${id}`,{
            method: 'DELETE'
        })
        .then(data => {
            console.log(data)
            this.getEmpleados
        })
    }
    },

    

    beforeMount(){
        this.getEmpleados()
    }

    }


</script>  