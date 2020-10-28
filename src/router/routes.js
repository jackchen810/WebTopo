import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
// import Fullscreen from '../pages/topo/Fullscreen'
// import Fullscreenpage from '../pages/topo/Fullscreenpage'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/',
        //name: '/',
        component: resolve => require(['../views/Projectmanage'], resolve)
    },
      {
          path: '/Projectmanage',
          //name: '/',
          component: resolve => require(['../views/Projectmanage'], resolve)
      },
      {
        path: '/usermanage',
        //name: '/',
        component: resolve => require(['../views/usermanage'], resolve)
    },
    {
      path: '/Facility',
      //name: '/',
      component: resolve => require(['../views/Facility'], resolve)
  },
    ]
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
  // {
  //   path: '/Fullscreen',
  //   name: 'Fullscreen',
  //   component: () => import('pages/topo/Fullscreen'),
  // },
  {
    path: '/Fullscreenpage',
    name: 'Fullscreenpage',
    component: () => import('pages/topo/Fullscreenpage'),
  },
  {
    path: '/Fullscreen', name: 'Fullscreen',component: () => import('pages/topo/Fullscreen.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
