<script setup>
    import { ref } from 'vue';
    import { user_em } from './ViewEmpleados.vue';

    const roles = ref([
    { name: 'ADMINISTRADOR', code: 'AM' },
    { name: 'AUXILIAR', code: 'AX' },
    { name: 'TECNICO', code: 'TEC' },
    { name: 'AYUDANTE'},
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
            <InputText  v-model="user_em"/>
            </InputGroup>

        </div>
    
        <div class="SName">
            <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText placeholder="Apellidos" />
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
            <Listbox required v-model="authority_1" :options="roles" optionLabel="name" class="form-control form-control-lg w-full md:w-14rem" />
        </div>

        

    </div>

    <br>
    <br>

    <div class="btn btn-success btn-block btn-lg b1">
        <Button @click="$event => addUser(authority_1.name)" label="Register"/>
    </div>
    <img src="@/assets/images/checkUp.png" id="power-2"/>

</div>
</template>

<script >


const user_1 = null;
const authority_1 = ref();

export default {

    name: 'updateUser',
    data(){
        return {
            level: {
                username: user_1,

            }
        }
    },

    methods: {
        addUser(id){
            fetch(`http://localhost:8080/authority/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.level)
            })
            .then(data => {
                console.log(data)
                console.log(authority_1)
                this.$router.push("/dashBoardAdmin")
            })
        }
    }
}

</script>  