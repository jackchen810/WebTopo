<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />

        <q-toolbar-title>金大万翔物联网管理平台</q-toolbar-title>

        <q-chip>
          <q-avatar>
            <img src="../assets/img/tt.png" />
          </q-avatar>
       
          {{username}}
        </q-chip>
        <q-btn class="exit" color="primary" size="xm" round icon="exit_to_app" title="退出" @click="exitchange" />
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
          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple @click="menuItemclick(index)">
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>{{ menuItem.label }}</q-item-section>
          </q-item>

          <q-separator v-if="menuItem.separator" />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>-->
          金大万翔物联网管理平台
           <div id="content"></div> 
           <div id="verticalRuler"></div>
            <div id="levelRuler"></div>
            <!--content 不能删 -->
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>

import { mapState, mapMutations, mapAction } from "vuex";

import Projectmanage from "./Projectmanage";

export default {
  name:'Home',
  components: {
    Projectmanage,
  },
  computed: {
      userDatalist: (state) => state.example.userDatalist,
   },
  data() {
    return {
      drawer: false,
      userAccount: this.$store.state.example.userAccount, //用data接收
      menuList: [
        {
          icon: "inbox",
          label: "项目管理",
          separator: true,
        },
        {
          icon: "send",
          label: "用户中心",
          separator: false,
        },
      ],
      username: "",
      tabledata:[]
    };
  },
  methods: {
    ...mapMutations("example", [
      "getuserDatalist",
   ,
    ]),
    exitchange(){
      localStorage.removeItem("user_type");
      localStorage.removeItem("user_account");
      this.$router.push("/");
    },
    menuItemclick(val){
      console.log(val);
      switch (val) {
        case 0:
          this.$router.push("/Projectmanage");
          break;
       case 1:
          this.$router.push("/usermanage");
          break;
        default:
          break;
      }
    },
    async userlist(cpage){
       let username = localStorage.getItem('user_account')
      this.current_page = cpage ? cpage: this.current_page
       let ndata = {
         user_account:username,
         page_size:this.page_size,
         current_page:this.current_page
       }
      await this.$axios.post('/api/drag/userlist',ndata).then(
            res =>{ 
                res.data.extra.map( item => {  
                  this.tabledata.push(item.user_account )
                })
              this.getuserDatalist(this.tabledata)
            }
      )
    },

  },
  mounted() {
    this.userlist()
    this.username = localStorage.getItem('user_account')
 
  },
};
</script>
<style scoped>
.exit {
  margin: 0 5px 0 20px;
}
</style>
 
