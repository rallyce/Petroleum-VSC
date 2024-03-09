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
    <main>
    <table id="customers">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Actualizacion</th>
                    <th scope="col">Eliminacion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="empleado in empleados" :key="empleado.username">
                    <td>{{ empleado.username }}</td>
                    <td>{{ empleado.role }}</td>
                    <td style="text-align: center;">
                       <a href="/updateUser"><Button label="Actualizar" severity="info" @click="$event => getUsernameEmpleado(empleado.username)"/></a>
                    </td>
                    <td style="text-align: center;">
                        <Button label="Eliminar" severity="danger" @click="$event => deleteEmpleado(empleado.username)"/>
                    </td>
                    
                </tr>

            </tbody>
        </table>
    </main>
    <br>
    <br>


</div>
</template>

<script >

const user_em = ref();

export {user_em}

export default {

    name: 'viewEmpleados',
    data(){
        return{
            empleados: [],
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

        getUsernameEmpleado(username_empleado){
            console.log(username_empleado)
            user_em = username_empleado
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