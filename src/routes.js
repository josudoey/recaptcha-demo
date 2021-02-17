module.exports = [{
  name: 'home',
  path: '/',
  component: () => import('./pages/home/index.vue')
}, {
  name: 'site',
  path: '/site/:key',
  component: () => import('./pages/site/index.vue')
}]
