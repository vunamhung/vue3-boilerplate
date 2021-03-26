import { createApp } from 'vue';
import VueFeather from 'vue-feather';
import { ElButton, ElSelect, ElProgress, ElInput, ElDivider, ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus';
import App from './App.vue';
import router from './router.js';
import 'tailwindcss/base.css';
import './assets/styles/element-plus.scss';
import './assets/styles/style.scss';

const app = createApp(App);

app.component(VueFeather.name, VueFeather);

[ElButton, ElSelect, ElProgress, ElInput, ElDivider, ElDropdown, ElDropdownItem, ElDropdownMenu].forEach((item) => app.use(item));

app.use(router);
app.mount('#app');
