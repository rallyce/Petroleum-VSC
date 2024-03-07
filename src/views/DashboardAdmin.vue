<script setup >
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([


    {
        label: 'Home',
        icon: 'pi pi-home'
        
    },
    {
        label: 'Add',
        icon: 'pi pi-plus-circle',
        items: [
            {
                label: 'New user',
                icon: 'pi pi-user-plus',
                command: () => {
                router.push('/addUser');
        }
            }
        ]
    },
    {
        label: 'Update',
        icon: 'pi pi-search',
        items: [
            {
                label: 'User',
                icon: 'pi pi-user-edit'
            },
            {
                separator: true
            }
        ]
    },
    {
        label: 'Employees List',
        icon: 'pi pi-database',
        badge: 3
    }
]);

</script>



<template>
    <div class="background1">
        <div class="card">
        <Menubar :model="items">
            <template #start>
                <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-2rem">
                    <path
                        d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                        fill="var(--primary-color)"
                    />
                    <path
                        d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                        fill="var(--text-color)"
                    />
                </svg>
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

    <Card style="width: 30rem; overflow: hidden" id="card-1">
        <template #header>
            <img alt="user header" src="@/assets/images/inventory.webp" id="imag1" />
        </template>
        <template #title>Explore our system!</template>
        <template #subtitle>High performance management</template>
        <template #content>
            <p class="m-0">
                We designed a system that fits your requests, improves your management and provides you the 
                tools to manage your inventory in a dynamic way.
            </p>
        </template>
        <template #footer>
            <div class="flex gap-3 mt-1">
                <Button label="Explore" class="w-full" />
            </div>
        </template>
    </Card>

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

#imag1{
    width: 500px;
    height: 300px;
}

</style>


 
<script >

export default {


    name: 'dashBoardAdmin'
}

</script>   




