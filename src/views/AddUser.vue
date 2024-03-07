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
    <h1 style="text-align: center;">Registrar nuevo usuario</h1>
    <br>
    <h2 style="text-align: center;">Informacion personal</h2>
    <br>

    <div class="datosUsuario1">
        <div class="FName">
            <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText placeholder="Nombres"  />
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
    <h2 style="text-align: center;">Informacion de cuenta</h2>
    <br>
    <div class="datosUsuario2">
        <div class="userName">
            <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-info-circle"></i>
            </InputGroupAddon>
            <InputText v-model="user_1" placeholder="Nombre de usuario" />
            </InputGroup>

        </div>

        <br>
        <br>
        
        <div class="password">
            <Password v-model="value" placeholder="Contraseña" toggleMask    />

        </div>

        
    </div>

    <br>
    <br>
    <br>

    
    <h2 style="text-align: center;">Nivel de autorizacion</h2>
    <div class="dataAuthorization">
        <div class="authorization">
            <Listbox required v-model="authority_1" :options="roles" optionLabel="name" class="form-control form-control-lg w-full md:w-14rem" />
        </div>

    </div>

    <button @click="$event => addUser(authority_1.name)" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Register</button>

</div>
</template>

<script >


const user_1 = null;
const authority_1 = ref();

export default {

    name: 'addUser',
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
            })
        }
    }
}

</script>  