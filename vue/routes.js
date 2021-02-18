module.exports = [{
  name: 'home',
  path: '/',
  component: () => import('./pages/home/index')
}, {
  name: 'site',
  path: '/site/:key',
  component: () => import('./pages/site/index')
}]
