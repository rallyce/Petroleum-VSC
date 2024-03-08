<script setup >
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { nombre } from "@/views/Login.vue"

const router = useRouter();

const items = ref([


    {
        label: 'Agregar',
        icon: 'pi pi-plus-circle',
        items: [
            {
                label: 'Nuevo usuario',
                icon: 'pi pi-user-plus',
                command: () => {
                router.push('/addUser');
        }
            }
        ]
    },
    {
        label: 'Lista de empleados',
        icon: 'pi pi-database',
        badge: 3,
        command: () =>{
            router.push('/updateUser')
        }
    }
]);

</script>



<template>
    <div class="background1">
        <div class="card">
        <Menubar :model="items">
            <template #start>
                <img src="@/assets/images/logo.png" id="logo-dash" />
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <a v-ripple :href="href" class="flex align-items-center" v-bind="props.action" @click="navigate">
                    <span :class="item.icon" id="icons"  />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" id="badges1" />
                    <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </a>
            </template>
            <template #end>
                <div class="flex align-items-center gap-2">
                    <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" id="search1" />
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" id="avatar1" />
                </div>
            </template>
        </Menubar>
    </div>

    <br>

    <div class="cards-page">
    <Card style="width: 30rem; overflow: hidden;" id="card-1">
        <template #header>
            <img alt="user header" src="@/assets/images/inventory.webp" id="imag1" />
        </template>
        <template #title>Explora nuestro sistema!</template>
        <template #subtitle style="">Administracion de alto rendimiento</template>
        <template #content>
            <p class="m-0">
                Diseñamos un sistema que se adapta a tus solicitudes, mejora tu gestión y te proporciona las herramientas 
                para gestionar tu inventario de forma dinámica.

            </p>
        </template>
        <template #footer>
            <div class="flex gap-3 mt-1">
                <Button label="Explorar" class="w-full" />
            </div>
        </template>
    </Card>

    <Card style="width: 30rem; overflow: hidden" id="card-2">
        <template #header>
            <img alt="user header" src="@/assets/images/industrial.jpg" id="imag-2" />
        </template>
        <template #title>Importancia del orden</template>
        <template #subtitle>La funcionalidad de un sistema</template>
        <template #content>
            <p class="m-0">
                Porque es tan importante mantener un orden y estructura en una empresa? esto aplica para
                la vida misma y aqui te respondemos todo a detalle.
            </p>
        </template>
        <template #footer>
            <div class="flex gap-3 mt-1">
                <Button label="Explorar" class="w-full" />
            </div>
        </template>
    </Card>

    <Card style="width: 30rem; overflow: hidden" id="card-3">
        <template #header>
            <img alt="user header" src="@/assets/images/caution.jpg" id="imag-2" />
        </template>
        <template #title>La Seguridad</template>
        <template #subtitle>La salud siempre es primero</template>
        <template #content>
            <p class="m-0">
                Siempre se tiene que estar atento a tomar las medidas necesarias de seguridad en cualquier
                entorno industrial, conoce cuales son nuestras recomendaciones para garantizar una ambiente
                seguro y de calidad para los trabajadores.
            </p>
        </template>
        <template #footer>
            <div class="flex gap-3 mt-1">
                <Button label="Explorar" class="w-full" />
            </div>
        </template>
    </Card>

    
</div>

<h1 class="welcome-1">Bienvenido {{ nombre }}!</h1>
</div>


</template>

<style>

#icons{

    display:inline-block;
    width: 25px;
}

#badges1{
    position: relative;
    left: 5px;
}

#search1{
    position: relative;
    bottom: 2.5px;
    right: 15px;
}


#avatar1{
    position: relative;
    right: 5px;
    top: 5px;
}



</style>


 
<script >

export default {


    name: 'dashBoardAdmin'
}

</script>   




