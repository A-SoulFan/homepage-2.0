import { createApp, h } from 'vue';
import { RouterView } from 'vue-router';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import './index.less';
import router from './router';

createApp({ render: () => h(RouterView) })
  .use(router)
  .use(Toast)
  .mount('#app');
