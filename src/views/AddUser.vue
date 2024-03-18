<script setup>
    import { ref } from 'vue';

    

    const countries = ref([
    'Colombia',
    'Argentina',
    'Mexico',
    'Brasil',
    'Chile'
]);

const cities = ref([
    'Cartagena',
    'Medellin',
    'Bogota',
    'Barrranquilla',
    'Manizales'
]);

const permisos = ref([
    'ADMINISTRADOR',
    'AUXILIAR',
    'TECNICO'
]);

</script>

<template>
    <div class="background-addUser">
    <h1 style="text-align: center;">Informacion personal del empleado</h1>
    <br>
    <h2 style="text-align: center;">Informacion personal</h2>
    <br>
        
    <form @submit.prevent="addUser()">
    <div class="datosUsuario1">
        <div class="FName">
            <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText v-model="level.nombre" placeholder="Nombre completo" required />
            </InputGroup>

        </div>

        <br>

        <div class="card flex justify-content-center" id="countries">
            <h3>Pais:</h3>
            <Dropdown v-model="level.pais" :options="countries" placeholder="Seleccione un pais" class="w-full md:w-14rem" />
            <br>
            <br>
            <h3>Ciudad:</h3>
            <Dropdown v-model="level.ciudad" :options="cities" placeholder="Seleccione una ciudad" class="w-full md:w-14rem" />
        </div>
    
    </div>

    <br>
    <br>
    <h2 style="text-align: center;">Informacion de cuenta</h2>
    <br>

    
    <div class="datosUsuario2">
        <div class="FName"> 
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText placeholder="Nombre de usuario" required />
        </InputGroup>
        </div>
        <br>

        <div class="password">
        <Password v-model="level.password" placeholder="Contraseña" required  toggleMask  />
        </div>


        <br>
        <br>
        

        
    </div> 
    
    <div class="password">
        <h2 style="text-align: center;">Nivel de permisos</h2>
        <br>

 
        <Dropdown  v-model="level.pais" :options="permisos" placeholder="Seleccione un nivel de autorizacion" class="w-full md:w-14rem" />
        
    </div>

    <br>
    <br>

    <div class="btn btn-success btn-block btn-lg b1">
        <Button type="submit" label="Crear cuenta"/>
    </div>

    </form>

    <div class="btn btn-success btn-block btn-lg b1">
        
        
            
    </div>

    <div v-if="warn_1 != ''"><h2>Hola</h2></div>
    

    <img src="@/assets/images/power.png" id="power-1"/>

</div>
</template>

<script >

let warn_1 = ref('')


export default {

    name: 'addUser',
    data(){
        return {
            level: {
                nombre: '',
                pais: '',
                ciudad: '',
                username: '',
                password: '',
                role: '',
            }
        }
    },

    methods: {
        addUser(){
            fetch(`http://localhost:8080/empleado`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.level)
            })
            .then(data => {
                console.log(data)
                this.$router.push("/viewEmpleados")
            })
        },

        example(){
            this.$router.push("/viewEmpleados")
        }
    }
}

</script>  