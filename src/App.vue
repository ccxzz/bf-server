<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {}
    },
    mounted () {
    },
    components: {
    },
    methods: {},
    watch: {}
  }
</script>

<style>
  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {
    margin: 0;
    padding: 0;
    font-family: "Microsoft YaHei";
  }
  
  body, button, input, select, textarea {
    font: 12px/1.5 tahoma, arial, \5b8b\4f53;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
  }
  
  address, cite, dfn, em, var {
    font-style: normal;
  }
  
  code, kbd, pre, samp {
    font-family: couriernew, courier, monospace;
  }
  
  small {
    font-size: 12px;
  }
  
  ul, ol {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  sup {
    vertical-align: text-top;
  }
  
  sub {
    vertical-align: text-bottom;
  }
  
  legend {
    color: #000;
  }
  
  fieldset, img {
    border: 0;
  }
  
  button, input, select, textarea {
    font-size: 100%;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  /*滚动条样式*/
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #b8b8b8;
    -webkit-border-radius: 6px;
    outline: 2px solid #fff;
    outline-offset: -2px;
    border: 2px solid #fff;
    filter: alpha(opacity=50);
    -moz-opacity: 0.5;
    -khtml-opacity: 0.5;
    opacity: 0.5;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: #fff;
    -webkit-border-radius: 0;
  }
  
  /*皮肤颜色*/
  .bind_lightblue{
    background-color: #02a2aa;
  }
  .bind_lightblue::after, .bind_lightblue .skin_menu{
    background-color: #009198;
  }
  .bind_lightblue .menu-list{
    border-left: 1px solid #009198;
  }
  .bind_lightblue .menu-item{
    border-right: 1px solid #009198;
  }
  .bind_lightblue .active{
    background-color: #009198;
  }
  .bind_lightblue .active::after{
    background-color: #f45438;
  }
  .bind_lightblue .drop-title-hover{
    background-color: #009198;
  }
  .bind_lightblue .drop-menu-item:hover .fa-icon{
    color: #02a2aa;
  }
  .bind_lightblue .custom-el-menu .left-icon{
    color: #02a2aa;
  }
  .bind_lightblue .custom-el-menu>.el-menu-item, .bind_lightblue .custom-el-menu>.el-submenu{
    border-bottom: 1px solid #e1e1e1;;
  }
  .bind_lightblue .left-menu-title{
    color: #2d4112;
    background: #e3e3e3;
  }
  .bind_lightblue .custom-el-menu,
  .bind_lightblue .el-menu-item:focus,
  .bind_lightblue .el-menu-item:hover,
  .bind_lightblue .el-submenu__title:hover{
    background-color: #ffffff;
  }
  .bind_lightblue .custom-el-menu .el-menu-item.is-active {
    border-left: 3px solid orange;
    background-color: #009198;
    color: #fff;
  }
  .bind_lightblue .custom-el-menu .el-menu-item.is-active .left-icon{
    color: #fff;
  }
  .bind_lightblue.content-box .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active,
  .bind_lightblue .el-tabs--border-card>.el-tabs__header .el-tabs__item:hover{
    color: #009198;
  }
  .bind_lightblue.work-bench .el-card__header{
    background-color: #02a2aa;
  }
  .bind_lightblue .department-msg .treeLabelIcon{
    color: #02a2aa;
  }
  .bind_lightblue.left-menu{
    background: none;
  }
  .bind_lightblue.content-box .vue-contextmenu-listWrapper .context-menu-list button{
    color: #02a2aa;
  }
  .bind_lightblue.content-box .vue-contextmenu-listWrapper .context-menu-list button:hover{
    background: #009198;
    color: #fff;
  }
  .bind_lightblue .box-card-title{
    border-bottom: 2px solid #009198;
    color: #02a2aa;
  }

  .bind_blue{
    background-color: #05a7d8;
  }
  .bind_blue::after, .bind_blue .skin_menu{
    background-color: #008bb5;
  }
  .bind_blue .menu-list{
    border-left: 1px solid #008bb5;
  }
  .bind_blue .menu-item{
    border-right: 1px solid #008bb5;
  }
  .bind_blue .active{
    background-color: #008bb5;
  }
  .bind_blue .active::after{
    background-color: #f45438;
  }
  .bind_blue .drop-title-hover{
    background-color: #008bb5;
  }
  .bind_blue .drop-menu-item:hover .fa-icon{
    color: #05a7d8;
  }
  .bind_blue .custom-el-menu .left-icon{
    color: #008bb5;
  }
  .bind_blue .custom-el-menu>.el-menu-item, .bind_blue .custom-el-menu>.el-submenu{
    border-bottom: 1px solid #e1e1e1;;
  }
  .bind_blue .left-menu-title{
    color: #2d4112;
    background: #e3e3e3;
  }
  .bind_blue .custom-el-menu,
  .bind_blue .el-menu-item:focus,
  .bind_blue .el-menu-item:hover,
  .bind_blue .el-submenu__title:hover{
    background-color: #ffffff;
  }
  .bind_blue .custom-el-menu .el-menu-item.is-active {
    border-left: 3px solid orange;
    background-color: #008bb5;
    color: #fff;
  }
  .bind_blue .custom-el-menu .el-menu-item.is-active .left-icon{
    color: #fff;
  }
  .bind_blue.content-box .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active,
  .bind_blue .el-tabs--border-card>.el-tabs__header .el-tabs__item:hover{
    color: #008bb5;
  }
  .bind_blue.work-bench .el-card__header{
    background-color: #05a7d8;
  }
  .bind_blue .department-msg .treeLabelIcon{
    color: #05a7d8;
  }
  .bind_blue.left-menu{
    background: none;
  }
  .bind_blue.content-box .vue-contextmenu-listWrapper .context-menu-list button{
    color: #05a7d8;
  }
  .bind_blue.content-box .vue-contextmenu-listWrapper .context-menu-list button:hover{
    background: #008bb5;
    color: #fff;
  }
  .bind_blue .box-card-title{
    border-bottom: 2px solid #008bb5;
    color: #05a7d8;
  }
  
  .bind_red{
    background-color: #e13030;
  }
  .bind_red::after, .bind_red .skin_menu{
    background-color: #b10909
  }
  .bind_red .menu-list{
    border-left: 1px solid #b10909;
  }
  .bind_red .menu-item{
    border-right: 1px solid #b10909;
  }
  .bind_red .active{
    background-color: #b10909;
  }
  .bind_red .active::after{
    background-color: #ff9d02;
  }
  .bind_red .drop-title-hover{
    background-color: #b10909;
  }
  .bind_red .drop-menu-item:hover .fa-icon{
    color: #e13030;
  }
  .bind_red .custom-el-menu .left-icon{
    color: #b10909;
  }
  .bind_red .custom-el-menu>.el-menu-item, .bind_red .custom-el-menu>.el-submenu{
    border-bottom: 1px solid #e1e1e1;;
  }
  .bind_red .left-menu-title{
    color: #2d4112;
    background: #e3e3e3;
  }
  .bind_red .custom-el-menu,
  .bind_red .el-menu-item:focus,
  .bind_red .el-menu-item:hover,
  .bind_red .el-submenu__title:hover{
    background-color: #ffffff;
  }
  .bind_red .custom-el-menu .el-menu-item.is-active {
    border-left: 3px solid orange;
    background-color: #b10909;
    color: #fff;
  }
  .bind_red .custom-el-menu .el-menu-item.is-active .left-icon{
    color: #fff;
  }
  .bind_red.content-box .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active,
  .bind_red .el-tabs--border-card>.el-tabs__header .el-tabs__item:hover{
    color: #b10909;
  }
  .bind_red.work-bench .el-card__header{
    background-color: #e13030;
  }
  .bind_red .department-msg .treeLabelIcon{
    color: #e13030;
  }
  .bind_red.left-menu{
    background: none;
  }
  .bind_red.content-box .vue-contextmenu-listWrapper .context-menu-list button{
    color: #e13030;
  }
  .bind_red.content-box .vue-contextmenu-listWrapper .context-menu-list button:hover{
    background: #b10909;
    color: #fff;
  }
  .bind_red .box-card-title{
    border-bottom: 2px solid #e13030;
    color: #b10909;
  }
  
  .bind_green{
    background-color: #00a65a;
  }
  .bind_green::after, .bind_green .skin_menu{
    background-color: #198b25
  }
  .bind_green .menu-list{
    border-left: 1px solid #198b25;
  }
  .bind_green .menu-item{
    border-right: 1px solid #198b25;
  }
  .bind_green .active{
    background-color: #198b25;
  }
  .bind_green .active::after{
    background-color: #ff9d02;
  }
  .bind_green .drop-title-hover{
    background-color: #198b25;
  }
  .bind_green .drop-menu-item:hover .fa-icon{
    color: #00a65a;
  }
  .bind_green .custom-el-menu .left-icon{
    color: #198b25;
  }
  .bind_green .custom-el-menu>.el-menu-item, .bind_green .custom-el-menu>.el-submenu{
    border-bottom: 1px solid #2c3b41;;
  }
  .bind_green .left-menu-title{
    color: #fff;
    background: #1e282c;
  }
  .bind_green .custom-el-menu,
  .bind_green .el-menu-item:focus,
  .bind_green .el-menu-item:hover,
  .bind_green .el-submenu__title:hover{
    background-color: #222d32;
  }
  .bind_green .el-menu-item{
    color: #b8c7ce;
  }
  .bind_green .custom-el-menu .el-menu-item.is-active {
    border-left: 3px solid orange;
    background-color: #198b25;
    color: #fff;
  }
  .bind_green .custom-el-menu .el-menu-item.is-active .left-icon{
    color: #fff;
  }
  .bind_green.content-box .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active,
  .bind_green .el-tabs--border-card>.el-tabs__header .el-tabs__item:hover{
    color: #198b25;
  }
  .bind_green.work-bench .el-card__header{
    background-color: #00a65a;
  }
  .bind_green .department-msg .treeLabelIcon{
    color: #00a65a;
  }
  .bind_green.left-menu{
    background-color: #222d32;
  }
  .bind_green.left-menu .custom-el-menu .el-submenu__title{
    color: #b8c7ce;
  }
  .bind_green.content-box .vue-contextmenu-listWrapper .context-menu-list button{
    color: #00a65a;
  }
  .bind_green.content-box .vue-contextmenu-listWrapper .context-menu-list button:hover{
    background: #198b25;
    color: #fff;
  }
  .bind_green .el-submenu .el-menu-item{
    background-color: #12171a;
  }
  .bind_green .box-card-title{
    border-bottom: 2px solid #00a65a;
    color: #198b25;
  }
</style>
