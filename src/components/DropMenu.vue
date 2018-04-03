<template>
  <div class="drop-down" @mouseenter="showDrop">
    <div class="drop-title" :class="{'drop-title-hover' : dropMenuShow}">
      <img class="drop-header" src="../assets/images/user.png"/>
      <span>username</span>
      <i class="el-icon-arrow-down" :class="{'el-icon-arrow-up' : dropMenuShow}"></i>
    </div>
    <div class="drop-menu-box" @mouseleave="hideDrop">
      <ul class="drop-menu" style="background-color: #fff" :class="{'drop-menu-hide' : !dropMenuShow}">
        <li class="drop-menu-item" v-for="item in DropMenuData">
          <router-link class="form-black" :to="item.href">
            <icon :name="item.name"></icon> <span>{{item.value}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DropMenu',
    props: ['DropMenuData'],
    data () {
      return {
        dropMenuShow: 0
      }
    },
    mounted () {
    },
    components: {},
    methods: {
      showDrop: function () {
        this.dropMenuShow = 1
      },
      hideDrop: function () {
        this.dropMenuShow = 0
      }
    },
    watch: {}
  }
</script>

<style scoped>
  .form-black{
    color: #000;
    text-decoration: none;
    display: inline-block;
    width: 100%;
  }
  .drop-down{
    width: 172px;
    position: relative;
    cursor: pointer;
    z-index: 3;
  }
  .drop-title{
    width: 152px;
    height: 50px;
    color: #fff;
    font-size: 16px;
    padding: 10px;
  }
  .drop-title-hover{
  }
  .drop-title .drop-header, .drop-title i, .drop-title span{
    display: inline-block;
    vertical-align: middle;
  }
  .drop-header{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .drop-menu-box{
    position: absolute;
    left: 1px;
    top: 0;
    padding-top: 70px;
    z-index: 999;
  }
  .drop-menu{
    padding: 10px 0;
    width: 170px;
    border-radius: 3px;
    box-shadow: 0 0 10px 1px #b6b6b6;
  }
  .drop-menu-hide{
    display: none;
  }
  .drop-menu-item{
    padding: 5px;
    text-align: left;
  }
  .drop-menu-item:hover{
    background-color: #e3e3e3;
  }
  .drop-menu-item .fa-icon{
    vertical-align: middle;
    width: 20px;
    height: 20px;
    line-height: 20px;
    padding: 0 5px;
  }
  .drop-menu-item:hover .fa-icon{
  }
  .drop-menu-item span{
    display: inline-block;
    vertical-align: middle;
  }
</style>
