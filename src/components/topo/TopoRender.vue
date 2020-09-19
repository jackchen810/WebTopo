<template>
    <div class="topo-render" :style="layerStyle" v-if="configData.layer">
        <template v-for="(component,index) in configData.components">
            <div class="topo-render-wrapper"
                    :key="index"
                    @click="doClickComponent(component)"
                    @dblclick="doDbClickComponent(component)"
                    :class="{'topo-render-wrapper-clickable': component.action.length > 0 }"
                    v-show="component.style.visible == true? true:component.style.visible.value"
                    :style="{
                        left: component.style.position.x + 'px',
                        top: component.style.position.y + 'px',
                        width: component.style.position.w + 'px',
                        height: component.style.position.h + 'px',
                        backgroundColor: component.style.backColor,
                        zIndex: component.style.zIndex,
                        borderWidth: component.style.borderWidth + 'px',
                        borderStyle: component.style.borderStyle,
                        borderColor: component.style.borderColor,
                        transform: component.style.transform? `rotate(${component.style.transform}deg)`:'rotate(0deg)',
                    }">
                <component v-bind:is="parseView(component)" :detail="component" ref="spirit" />
            </div>
        </template>
    </div>
</template>

<script>
import TopoBase from './TopoBase';

import topoUtil from './util/topo-util';
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
export default {
    name: 'TopoRender',
    extends: TopoBase,
    components: {
        
    },
    computed: {
        ...mapState(
            {
                 topoData: (state) => state.topoEditor.topoData,
            }
        ),
        layerStyle:function () {
            var styles = [];
            if(this.configData.layer.backColor) {
                styles.push(`background-color: ${this.configData.layer.backColor}`);
            }
            if(this.configData.layer.backgroundImage) {
                styles.push(`background-image: url("${this.configData.layer.backgroundImage}")`);
            }
            if(this.configData.layer.width > 0) {
                styles.push(`width: ${this.configData.layer.width}px`);
            }
            if(this.configData.layer.height > 0) {
                styles.push(`height: ${this.configData.layer.height}px`);
            }
            var style = styles.join(';');
            return style;
        }
    },
    data() {
        return {
            configData: {
                
            },
             buttomdata:{
                 isclick : true,
                 identifier:'',
                 url:''
            },
        }
    },
    methods: {
        ...mapMutations('topoEditor',[
            'buttomupdata'
        ]),
        parseView(component) {
            return topoUtil.parseViewName(component);
        },
        doClickComponent(component){   
            
            if(component.type == 'buttom'){
                this.buttomdata.identifier = component.identifier
                  this.buttomdata.url = (this.buttomdata.isclick !==true)?'statics/topo/svg/on1.svg':'statics/topo/svg/off1.svg'
                    this.buttomupdata(this.buttomdata)
                    this.buttomdata.isclick = !this.buttomdata.isclick
            }
            
            for(var i = 0; i < component.action.length; i++) {
                var action = component.action[i];                
                if(action.type == 'click') {  
                     this.handleComponentActuib(action);                  
                }
            }        
        },
        doDbClickComponent(component){      
            for(var i = 0; i < component.action.length; i++) {
                var action = component.action[i];                
                if(action.type == 'dblclick') {  
                     this.handleComponentActuib(action);                  
                }
            }
        },
        //显示隐藏
        handleComponentActuib(action){
            var _this = this;
            if(action.action == 'visible'){
                if(action.showItems.length > 0) {
                    action.showItems.forEach(identifier => {
                        _this.showComponent(identifier,true);
                    });
                }
                if(action.hideItems.length > 0) {
                    action.hideItems.forEach(identifier => {
                        _this.showComponent(identifier,false);
                    });
                }
                	
            } else if(action.action == 'Invisible') {                        
                _this.sendFun(action);
            } 
        },
        showComponent(identifier,visible) {
            console.log('show:' + identifier + ',visible:' + visible);
            var spirits = this.$refs['spirit'];
            for(var i = 0; i < spirits.length; i++){
                var spirit = spirits[i];
                if(spirit.detail.identifier == identifier) {
                    spirit.detail.style.visible = visible;
                    break;
                }
            }
        },
         getData(){

            let that = this
             this.$axios.post(
               '/api/drag/list',
               {
                   username:localStorage.getItem('user_account'),
                }
           ).then(res =>{
               console.log(typeof(res.data.extra[0].dargjsondata));
               var Jsondata = JSON.parse(res.data.extra[0].dargjsondata)
                 console.log(Jsondata);
               that.configData = Jsondata
           })
            // this.this.configData = 
        }  
    },
    mounted() {
        // this.getData()
        //这里只是纯前端项目，实际应该从后台拿取数据    
        var temp = localStorage.getItem('topoData');
        // console.log(temp)
        this.configData = JSON.parse(temp);
        // console.log( this.configData)
        
    }
}
</script>

<style lang="scss">
    .topo-render {
        overflow: auto;
        background-color: white;
        background-clip: padding-box;
        background-origin: padding-box;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
        height: 100%;

        .topo-render-wrapper {
            position: absolute;
        }

        .topo-render-wrapper-clickable {
            cursor: pointer;
        }
    }
</style>

