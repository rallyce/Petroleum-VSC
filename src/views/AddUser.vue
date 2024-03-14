<script setup>
    import { ref } from 'vue';

    const selectedCountry = ref();

    const countries = ref([
    'Colombia',
    'Argentina',
    'Mexico',
    'Brasil',
    'Chile'
]);

const selectedCity = ref();

const cities = ref([
    'Cartagena',
    'Medellin',
    'Bogota',
    'Barrranquilla',
    'Manizales'
]);

</script>

<template>
    <div class="background-addUser">
    <h1 style="text-align: center;">Informacion personal del empleado</h1>
    <br>
    <h2 style="text-align: center;">Informacion personal</h2>
    <br>

    <div class="datosUsuario1">
        <div class="FName">
            <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText placeholder="Nombre completo"  />
            </InputGroup>

        </div>
    
    </div>

    <br>
    <br>
    <h2 style="text-align: center;">Informacion de residencia</h2>
    <br>
    <div class="datosUsuario2">
 
        <div class="card flex justify-content-center" id="countries">
            <h3>Pais:</h3>
            <Dropdown v-model="selectedCountry" :options="countries" placeholder="Seleccione un pais" class="w-full md:w-14rem" />
            <br>
            <br>
            <h3>Ciudad:</h3>
            <Dropdown v-model="selectedCity" :options="cities" placeholder="Seleccione una ciudad" class="w-full md:w-14rem" />
        </div>

        <br>
        <br>
        

        
    </div>   

    <br>
    <br>

    <div class="btn btn-success btn-block btn-lg b1">
        <Button @click="$event => addUser()" label="Guardar datos"/>
    </div>
    <img src="@/assets/images/power.png" id="power-1"/>

</div>
</template>

<script >


const user_1 = ref();
const password_1 = ref();
const authority1 = ref();

export default {

    name: 'addUser',
    data(){
        return {
            level: {
                username: user_1,
                password: password_1,
                role: authority1

            }
        }
    },

    methods: {
        addUser(){
            fetch(`http://localhost:8080/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.level)
            })
            .then(data => {
                console.log(data)
                console.log(authority1)
                this.$router.push("/viewEmpleados")
            })
        }
    }
}

</script>  