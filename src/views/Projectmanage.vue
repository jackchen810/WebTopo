<template>
  <div>
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs separator="---" class="text-orange" active-color="secondary">
        <q-breadcrumbs-el label="首页" icon="home" />
        <q-breadcrumbs-el label="项目管理" icon="widgets" />
        <!-- <q-breadcrumbs-el label="管理中心"" icon="navigation" /> -->
      </q-breadcrumbs>
      <q-btn color="primary" label="新建项目" @click="newpctTolink" />
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" v-for="(item,index) in componentdata" :key="index">
          <q-img
            src="https://cdn.quasar.dev/img/non-existent-image-src.png"
            style="height: 140px; max-width: 100%"
          >
            <template v-slot:error>
              <div class="absolute-full flex flex-center text-white">Cannot load image</div>
            </template>
          </q-img>
          <q-card-section>
            <div class="text-h6">项目名:{{item.projectname.substring(0,5)}}</div>
            <div class="text-subtitle2">创建人：{{item.username}}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <!-- 发布
            运行编辑分享下架设置复制删除-->
            <q-btn flat color="primary" @click="Fullscreen(item)" label="发布" />
            <!-- <q-btn flat color="primary" label="运行" /> -->
            <q-btn flat color="primary" @click="handleClick(item)" label="编辑" />
            <q-btn flat color="primary" @click="setupClick(item)" label="设置" />
            <q-btn flat color="primary" @click="delClick" label="删除" />
          </q-card-section>
        </q-card>
      </div>
      <!-- <div class="q-pa-lg flex flex-center">
        <q-pagination
        v-model="totalnum"
        :max="max"
        :max-pages="1"
        @input="getpaginationtal"
        >
        </q-pagination>
      </div>-->
      <CPagination :count="count" :emitEvent="emitEvent" @pageChange="pageChange"></CPagination>
    </div>
  </div>
</template>
<script>
import CPagination from "./pagination";
export default {
  name: "Projectmanage",
  components: {
    CPagination,
  },
  data() {
    return {
      componentdata: [],
      page_size: 10,
      current_page: 1,
      count: 0,
      max: 4,
      emitEvent: false,
    };
  },
  mounted: function () {
    this.max = Math.ceil(this.count / this.page_size);
    // this.pageChange();
  },
  methods: {
    newpctTolink() {
      this.$router.push("/TopoLayout");
    },
    pageChange(limit, offset) {
      let that = this;
      console.log(limit + "====" + offset);
      offset = offset == 0 ? offset + 1 : offset / 10 + 1;
      this.$axios

        .post("/api/drag/list", {
          username: localStorage.getItem("user_account"),
          page_size: limit,
          current_page: offset,
        })
        .then((res) => {
          console.log(res.data.extra);
          //  var Jsondata = JSON.parse(res.data.extra[0].dargjsondata)
          //    console.log(Jsondata.components);
          //   //  this.gettopoEditor(Jsondata)
          that.componentdata = res.data.extra;
          this.count = res.data.total;
          // this.emitEvent = !this.temitEventrue;
          //  that.configData = Jsondata
        });
      // this.this.configData =
    },
    getpaginationtal(val) {
      //   this.getData(val);
    },
    handleClick(val) {
      this.$router.push({
        path: "/TopoLayout",
        query: {
          id: val._id,
        },
      });
    },
    Fullscreen(val) {
           localStorage.setItem('topoData',val.dargjsondata)
      let routeData = this.$router.resolve({
        path: "/Fullscreen",
        query: { id: val._id },
      });
      window.open(routeData.href, "_blank");
    },
    setupClick(val) {
        console.log(val);
        localStorage.setItem('topoData',val,dargjsondata)
    },
    delClick() {},
  },
};
</script>
<style lang="stylus" scoped>
.my-card {
  width: 100%;
  max-width: 240px;
}

.text-h6 {
  font-size: 1rem;
}
</style>