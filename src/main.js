import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-dark-green/theme.css'
import 'primeicons/primeicons.css'

import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import Card from 'primevue/card';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Password from 'primevue/password';
import Listbox from 'primevue/listbox';
import Dropdown from 'primevue/dropdown';
import FloatLabel from 'primevue/floatlabel';
import Textarea from 'primevue/textarea';

const app = createApp(App)



app.use(router)
app.use(PrimeVue)
app.use(store)

app.component('Menubar', Menubar)
app.component('InputText', InputText)
app.component('Button', Button)
app.component('Avatar', Avatar)
app.component('Badge', Badge)
app.component('Card', Card)
app.component('InputGroup', InputGroup)
app.component('InputGroupAddon', InputGroupAddon)
app.component('Password', Password)
app.component('Listbox', Listbox)
app.component('Dropdown', Dropdown)
app.component('FloatLabel', FloatLabel)
app.component('Textarea', Textarea)


app.mount('#app')
