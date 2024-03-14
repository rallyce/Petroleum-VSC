<script setup>
    import { ref } from 'vue';

    const roles = ref([
      "ADMINISTRADOR",
      'AUXILIAR' ,
      'TECNICO',
      'AYUDANTE',
])
</script>

<template>
    <div class="background-addUser">
    <h1 style="text-align: center;">Actualizar usuario</h1>
    <br>
    <h2 style="text-align: center;">Informacion personal</h2>
    <br>

    <div class="datosUsuario1">
        <div class="FName">
            <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText v-model="level.nombre" disabled="true"/>
            </InputGroup>

        </div>
    </div>

    <br>
    <br>
    <br>
    <br>

    
    <h2 style="text-align: center;">Nivel de autorizacion</h2>
    <div class="dataAuthorization">
        <div class="authorization">
            <Listbox required v-model="level.role" :options="roles" class="form-control form-control-lg w-full md:w-14rem" />
        </div>

        

    </div>

    <br>
    <br>

    <div class="btn btn-success btn-block btn-lg b1">
        <Button @click="$event => updateUser(level.nombre)" label="Register"/>
    </div>
    <img src="@/assets/images/checkUp.png" id="power-2"/>

</div>
</template>

<script >


const user_1 = ref();

export default {

    name: 'updateUser',
    data(){
        return {
            level: {
                nombre: '',
                pais: '',
                ciudad: ''
            }
        }
    },

    methods: {
        getEmpleado(){
            fetch(`http://localhost:8080/empleado/${this.$route.params.id}`)
            .then(res => res.json())
            .then(data => {
                this.level = data
                console.log(this.level)
            })
        },

        updateUser(id){
            fetch(`http://localhost:8080/empleado/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.level)
            })
            .then(data => {
                console.log(data)
                console.log(this.level.role)
                this.$router.push("/viewEmpleados")
            })
        }
    },

    beforeMount(){
        this.getEmpleado()
    }
}

</script>  