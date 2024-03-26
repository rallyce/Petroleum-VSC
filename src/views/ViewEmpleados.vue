<script setup>

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
                    <th scope="col">Pais</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Actualizacion</th>
                    <th scope="col">Eliminacion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="empleado in empleados" :key="empleado.id">
                    <td>{{ empleado.nombre }}</td>
                    <td>{{ empleado.pais }}</td>
                    <td>{{ empleado.ciudad }}</td>
                    <td style="text-align: center;">
                        <a :href="`/updateUser/${empleado.id}`"><Button label="Actualizar" severity="info"/></a>
                    </td>
                    <td style="text-align: center;">
                        <Button label="Eliminar" severity="danger" @click="$event => deleteEmpleado(empleado.id)"/>
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



export default {

    name: 'viewEmpleados',
    data(){
        return{
            empleados: [],
        }
    },


    methods: {
        getEmpleados(){
            fetch('http://localhost:8080/employee/empleado')
            .then(res => res.json())
            .then(data => {
                this.empleados = data
                console.log(data)
            })
        },

        deleteEmpleado(id){
        fetch(`http://localhost:8080/employee/empleados/${id}`,{
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