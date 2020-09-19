import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Fullscreen from '../pages/topo/Fullscreen'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/TopoLayout',
    name:'TopoLayout',
    component: () => import('layouts/TopoLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/topo/Editor.vue')
      }
    ]
  },
  {
    path: '/Fullscreen',
    name: 'Fullscreen',
    component: Fullscreen
  },
  // {
  //   path: '/fullscreen', name: 'TopoFullscreen',component: () => import('pages/topo/Fullscreen.vue')
  // }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
