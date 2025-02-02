import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/layout';

export const constantRoutes = [{
  path: '/cityGarden',
  component: Layout,
  children: [{
    name: 'comReg',
    path: '/cityGarden/comReg',
    component: () => import(/* webpackChunkName: "comReg" */ '@/views/comReg/index')
  }, {
    name: 'epidemic',
    path: '/cityGarden/epidemic',
    component: () => import(/* webpackChunkName: "epidemic" */ '@/views/epidemic/index')
  }, {
    name: 'healthlishui',
    path: '/cityGarden/healthlishui',
    component: () => import(/* webpackChunkName: "healthlishui" */ '@/views/healthLishui/index')
  }, {
    name: 'publicHygiene',
    path: '/cityGarden/publicHygiene',
    component: () => import(/* webpackChunkName: "publicHygiene" */ '@/views/publicHygiene/index')
  }]
},
{
  path: '/',
  redirect: '/cityGarden/epidemic'
}
];

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
});

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
