<template>
    <div>
        <div class="q-pa-md q-gutter-sm">
        <q-breadcrumbs separator="---" class="text-orange" active-color="secondary">
        <q-breadcrumbs-el label="首页" icon="home" />
        <q-breadcrumbs-el label="项目管理" icon="widgets" />
        <!-- <q-breadcrumbs-el label="管理中心"" icon="navigation" /> -->
        </q-breadcrumbs>
        <q-btn color="primary" label="新建项目" />
        
    </div>
    </div>
</template>
<script>
export default {
    name:'Projectmanage'
}
</script>