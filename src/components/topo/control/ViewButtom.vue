<template>
<div class="view-buttom">
    <template v-if="detail.dataBind.queryParam.isclick">
        <img style="width:100%;height:100%;" :src="buttomdata.url"  @dragstart.prevent  @click="onchecked"    />
    </template>
    <template v-else>
        <img style="width:100%;height:100%;" :src="buttomdata.url"  @dragstart.prevent  />
    </template>
</div>
</template>

<script>
import BaseView from './View';


export default {
    name: 'view-buttom',
    extends: BaseView,
    props: {

    },
    computed: {
       
    },
    components: {
        

    },
    data() {
        return {
            buttomdata:{
                 isclick : true,
                 identifier: this.detail.identifier,
                 url:this.detail.style.url
            },
        }
    },
    methods: {
    //    ...mapMutations('topoEditor',[
    //         'buttomupdata',
    //     ]),

       onchecked(){
        
           this.buttomdata.url = (this.buttomdata.isclick==true)?'statics/topo/svg/on1.svg':'statics/topo/svg/off1.svg'
           this.buttomdata.isclick = !this.buttomdata.isclick
        //    if(!this.buttomdata.isclick){
        //     //    this.buttomupdata(this.buttomdata)
               
        //    }else{
        //         this.buttomupdata(this.buttomdata)
        //    }
         
       }
    },
    mounted:function(){
       console.log(this.detail.dataBind.queryParam.isclick)
    }
}
</script>

<style lang="scss">
.view-buttom {
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>