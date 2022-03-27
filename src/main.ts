import { createApp, h } from 'vue';
import APP from './APP.vue';
// import { RouterView } from 'vue-router';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import './assets/css/index.less';

import router from './router';

createApp(APP).use(router).use(Toast).mount('#app');
