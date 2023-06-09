import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/home/index.vue';
import Company from '../views/company/index.vue';
import Team from '../views/team/index.vue';
import Three from '../views/three/index.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/company', component: Company },
  { path: '/team', component: Team },
  { path: '/three', component: Three },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
