<template>
    <div class="topo-fullscreen">
        <TopoRender v-if="!prompt" />
        <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">请登录</div>
        </q-card-section>
        <!-- <Login></Login> -->
        <q-card-section class="q-pt-none">
          <q-input dense v-model="username" autofocus @keyup.enter="prompt = false" placeholder="用户名"/>
        </q-card-section>
          <q-card-section class="q-pt-none">
          <q-input dense v-model="password" autofocus @keyup.enter="prompt = false" placeholder="密码" type="password" />
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="登录" @click="clicklogin()"  />
        </q-card-actions> 
       </q-card> 
    </q-dialog>
    
    </div>
    
</template>

<script>

import TopoRender from '@/components/topo/TopoRenderpage';
import crypto from "crypto";
import Login from '../../views/Login.vue'
export default {
    name: 'TopoFullscreen',
    props:['id'],
    components: {
        TopoRender,
        Login
    },
    data(){
        return{
            prompt:true,
            username: '',
            password: '',
            showerr:''
        }
    },
    methods: {
         getmd5(password) {
      var md5Hash = crypto.createHash("md5");
      var md5Value = md5Hash.update(password).digest("hex");
      return md5Value;
    },
        clicklogin(){
            
            this.$axios.post('/api/admin/login',
            {
              user_account:this.username,
              user_password:this.getmd5(this.password)
            }
            ).then(res =>{
               
                if(res.data.ret_code === 0){
                    localStorage.setItem("user_type", '3');
                    localStorage.setItem("user_account",this.username);
                    this.prompt = false
                }else{
                   this.$message.error(res.data.ret_msg);
             
                }

            })
        },
        
    },
    created() {

    },
    mounted() {
        console.log(this.$route.params.id)

    }
}
</script>

<style lang="scss">
    .topo-fullscreen {
        height: 100vh;
        width: 100%;
    }
    .fullscreen{z-index: 500;}
</style>


