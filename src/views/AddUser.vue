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
            <Password v-model="password_1" placeholder="Contraseña" toggleMask    />

        </div>

        
    </div>

    <br>
    <br>
    <br>

    
    <h2 style="text-align: center;">Nivel de autorizacion</h2>
    <div class="dataAuthorization">
        <div class="authorization">
            <Listbox v-model="authority1" :options="roles" class="form-control form-control-lg w-full md:w-14rem" />
        </div>

        

    </div>

    <br>
    <br>

    <div class="btn btn-success btn-block btn-lg b1">
        <Button @click="$event => addUser()" label="Register"/>
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