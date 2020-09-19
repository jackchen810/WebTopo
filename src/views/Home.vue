<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />

        <q-toolbar-title>
          
          金大万翔物联网管理平台 
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list v-for="(menuItem, index) in menuList" :key="index">

            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>

           <q-separator v-if="menuItem.separator" />

          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
        <Projectmanage></Projectmanage>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar> -->
          金大万翔物联网管理平台 
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import Projectmanage from './Projectmanage'
export default {
    components:{
        Projectmanage
    },
  data () {
    return {
      drawer: false,
      menuList: [
  {
    icon: 'inbox',
    label: '项目管理',
    separator: true
  },
  {
    icon: 'send',
    label: '用户中心',
    separator: false
  },
//   {
//     icon: 'delete',
//     label: 'Trash',
//     separator: false
//   },
//   {
//     icon: 'error',
//     label: 'Spam',
//     separator: true
//   },
//   {
//     icon: 'settings',
//     label: 'Settings',
//     separator: false
//   },
//   {
//     icon: 'feedback',
//     label: 'Send Feedback',
//     separator: false
//   },
//   {
//     icon: 'help',
//     iconColor: 'primary',
//     label: 'Help',
//     separator: false
//   }
]

    }
  }
}
</script>