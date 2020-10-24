<template>


 
    <q-layout view="hHh Lpr lff" container  class="shadow-2 rounded-borders"  style="height: 100%;">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
         <q-toolbar-title>金大万翔物联网管理平台 </q-toolbar-title>

        <q-chip>
          <q-avatar>
            <img src="../assets/img/tt.png" />
          </q-avatar>
          {{username}}
         
        </q-chip>
        <q-btn class="exit" color="primary" size="xm" round icon="exit_to_app" title="退出" @click="exitchange" />
        </q-toolbar>
      </q-header>



    <!-- <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
      
        <Qmenu></Qmenu>
      </q-scroll-area>
    </q-drawer>
   -->
   <q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"

        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <Qmenu></Qmenu>
        </q-scroll-area>
      </q-drawer>




    <q-page-container  >
      <router-view />
    </q-page-container>
   <div id="content"></div> 
           <div id="verticalRuler"></div>
            <div id="levelRuler"></div>
         <!-- content 不能删  -->
    <!-- <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          金大万翔物联网管理平台
           <div id="content"></div> 
           <div id="verticalRuler"></div>
            <div id="levelRuler"></div>
         content 不能删 
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
  </q-layout>

</template>

<script>

import { mapActions, mapGetters, mapState, mapMutations } from "vuex";

import Projectmanage from "./Projectmanage";
import Qmenu from "./Qmenu";

export default {
  name:'Home',
  components: {
    Projectmanage,
    Qmenu
  },
  computed: {
      userDatalist: (state) => state.example.userDatalist,
   },
  data() {
    return {
      drawer: false,
      username: "",
      tabledata:[],
      configObjectName:'',
      drawer: false,
      miniState: true,
     
    };
  },
  methods: {
    ...mapMutations("example", [
      "getuserDatalist",
      'getProjectnametlist',
      'ProjectFacility'
    ]),
    
    exitchange(){
      localStorage.removeItem("user_type");
      localStorage.removeItem("user_account");
      this.$router.push("/");
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
    async list_pct_name(){
        await this.$axios.post('/api/admin/list',{
        user_account : localStorage.getItem('user_account')
      }).then(res=>{
        if(res.data.ret_code == 0){
          this.configObjectName = res.data.extra[0].user_projects
          this.getProjectnametlist(this.configObjectName)
          this.pctlist()
         
        }
      })
    },
     async pctlist(){
       let that  =this
          let params = {
                      filter: {project_name: { $in: this.configObjectName}}
                    };
                await this.$axios.post('/api/devunit/manage/list',params).then(function(res){
                    if(res.data.ret_code == 0){
                      that.ProjectFacility(res.data.extra)

                    }   
               })
    }

  },
  mounted() {
    this.userlist()

    this.list_pct_name()
    this.username = localStorage.getItem('user_account')
    // let count = 0;

    //         let ws = new WebSocket('ws://localhost:3301');
            
    //         ws.onopen = function () {
    //             console.log(`[CLIENT] open()`);
    //             ws.send('Hello!');
    //         }
    //         //接受信息

    //         ws.onmessage = function (message) {
    //             const backMsg = JSON.parse(message.data);
    //             console.log(backMsg)
    //             console.log(`[CLIENT] Received: ${backMsg}`);
    //             count++;
    //             if (count > 20) {
    //                 ws.send('Goodbye!');
    //                 ws.close();
    //             } else {
    //                 setTimeout(() => {
    //                     ws.send(`Hello, I'm Mr No.${count}!`);
    //                 }, 1000);
    //             }
    //}
  },
};
</script>
<style >

.exit {
  margin: 0 5px 0 20px;
}
.fit{ background: #000; color: #fff;}
</style>
 
