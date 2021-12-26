import Vue from 'vue';
import VueRouter from 'vue-router';
// eslint-disable-next-line import/extensions
import MainLayout from '@/views/MainLayout.vue';
import { localStorageUtil } from "@/js/storage.utils";
import { STORAGE_KEY_AUTH_TOKEN } from "@/js/constants.storage";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Root',
    components: {
      mainLayout: MainLayout,
    },
    children: [
      {
        path: '',
        name: 'Home',
        alias: 'index.html',
        components: {
          contents: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        },
      },
      {
        path: 'about',
        name: 'About',
        components: {
          contents: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    components: {
      loginLayout: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next)=> {
  const token = localStorageUtil.get(STORAGE_KEY_AUTH_TOKEN) || ''
  if(to.name === 'Login') {
    if(token !== '') {
      next({name: 'Home'})
    }
  }else {
    if(token === '')  {
      next({name: 'Login'})
    }
  }
  next()
})

export default router;
