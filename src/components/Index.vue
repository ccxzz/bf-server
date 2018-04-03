<template>
  <div>
    <HeaderTop></HeaderTop>
    <el-row type="flex">
      <LeftMenu></LeftMenu>
      <router-view/>
    </el-row>
  </div>
</template>

<script>
  import HeaderTop from '@/components/Header'
  import LeftMenu from '@/components/LeftMenu'
  export default {
    name: 'Index',
    computed: {
    },
    data () {
      return {
      }
    },
    mounted () {
    },
    components: {
      HeaderTop,
      LeftMenu
    },
    methods: {
    },
    watch: {}
  }
</script>

