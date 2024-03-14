<script setup>

</script>

<template>
    <div class="background-addUser">
    <h1 style="text-align: center;">Lista de Productos</h1>
    <br>
    <br>
    <main>
    <table id="customers">
            <thead>
                <tr>
                    <th scope="col">Nombre del producto</th>
                    <th scope="col">Fecha de reporte</th>
                    <th scope="col">Descripcion del evento</th>
                    <th scope="col">Actualizacion</th>
                    <th scope="col">Eliminacion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="producto in productos" :key="producto.id">
                    <td>{{ producto.producto }}</td>
                    <td>{{ producto.fecha }}</td>
                    <td>{{ producto.descripcion }}</td>
                    <td style="text-align: center;">
                        <a :href="`/updateUser/${producto.id}`"><Button label="Actualizar" severity="info"/></a>
                    </td>
                    <td style="text-align: center;">
                        <Button label="Eliminar" severity="danger" @click="$event => deleteEmpleado(producto.id)"/>
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

    name: 'listaProductos',
    data(){
        return{
            productos: [],
        }
    },


    methods: {
        getProductos(){
            fetch('http://localhost:8080/producto')
            .then(res => res.json())
            .then(data => {
                this.productos = data
                console.log(data)
            })
        },

        deleteEmpleado(id){
        fetch(`http://localhost:8080/producto/${id}`,{
            method: 'DELETE'
        })
        .then(data => {
            console.log(data)
            this.getProductos
        })
    }
    },

    

    beforeMount(){
        this.getProductos()
    }

    

    }


    </script>  