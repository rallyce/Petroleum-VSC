<script setup>
import { ref } from 'vue';

    

const maquinas = ref([
'CXT-1', 'CXT-4', 'CXT-5', 'CPP', 'IMP-1', 'IMP-2', 'IMP-3', 'IMP-4', 'OFRU', 'CORTA-TARAS',
'REF-6', 'REF-8', 'RE-9','LAM-1', 'LAM-2'
]);

</script>

<template>
    <div class="background-addUser">
    <h1 style="text-align: center;">Registro de producto</h1>
    <br>

    <form @submit.prevent="addProducto(producto.id)">
    <div class="FName"> 
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-file-edit"></i>
            </InputGroupAddon>
            <InputText v-model="producto.id" placeholder="ID del producto" required />
        </InputGroup>
        </div>

        <div class="password">
        <br>
        <br>
        <br>
 
        <Dropdown  v-model="producto.maquina" :options="maquinas" placeholder="Seleccione una maquina" class="w-full md:w-14rem" />
        
        </div>

        <br>
        <br>
        <br>
        <div class="FName"> 
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-cog"></i>
            </InputGroupAddon>
            <InputText v-model="producto.producto" placeholder="Nombre del producto/pieza" required />
        </InputGroup>
        </div> 
        
        <br>
        <br>
        <br>

        <div class="FName"> 
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-calendar"></i>
            </InputGroupAddon>
            <InputText v-model="producto.fecha" placeholder="Fecha de registro" required />
        </InputGroup>
        </div>
        
        <br>
        <div class="btn btn-success btn-block btn-lg b2">
        <Button type="submit" label="Registrar Producto"/>
        </div>
        
        <div class="d-producto">
        <FloatLabel>
            <Textarea v-model="producto.descripcion"  rows="17" cols="70" />
                <label id="label-1">Detalles del producto</label>
        </FloatLabel>
        </div>

        

        <img src="@/assets/images/package2.png" id="package-1"/>

        

    </form>
    </div>
</template>

<script>

export default {
    name: 'agregarProducto',
    data(){
        return {
            producto: {
                id: '',
                informanteId: {
                    id: 4,
                    nombre: 'Omar',
                    correo: 'example@ex.com'

                },
                maquina: '',
                producto: '',
                fecha: '',
                descripcion: ''
            }
        }
    },

    methods: {
        addProducto(id){
            fetch(`http://localhost:8080/producto/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.producto)
            })
            .then(data => {
                console.log(data)
                this.$router.push("/listaProductos")
            })
        }

    }

    
}

</script>