import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import i18n from './locale/index';

createApp(App)
  .use(router)
  .use(i18n)
  .use(Antd)
  .mount('#app');
