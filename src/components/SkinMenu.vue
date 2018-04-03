<template>
  <div class="drop-down skin_menu" @mouseenter="showDrop">
    <div class="drop-title" :class="{'drop-title-hover' : skinMenuShow}">
      <icon name="user-secret"></icon>
    </div>
    <div class="drop-menu-box" @mouseleave="hideDrop">
      <ul class="drop-menu" style="background-color: #fff" :class="{'drop-menu-hide' : !skinMenuShow}">
        <li @click="changeColor(item.name)"  class="drop-menu-item" v-for="item in SkinMenuData" :style="{backgroundColor: item.color}"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Icon from '../../node_modules/vue-awesome/components/Icon'
  export default {
    name: 'SkinMenu',
    data () {
      return {
        SkinMenuData: [
          {'color': '#02a2aa', 'name': 'lightblue'},
          {'color': '#05a7d8', 'name': 'blue'},
          {'color': '#e13030', 'name': 'red'},
          {'color': '#00a65a', 'name': 'green'}
        ],
        skinMenuShow: 0
      }
    },
    mounted () {
    },
    components: {Icon},
    methods: {
      changeColor (color) {
        this.$store.commit('changeColor', color)
      },
      showDrop: function () {
        this.skinMenuShow = 1
      },
      hideDrop: function () {
        this.skinMenuShow = 0
      }
    },
    watch: {}
  }
</script>

<style scoped>
  .drop-down{
    display: inline-block;
    position: absolute;
    cursor: pointer;
    right: 26px;
    bottom: 0;
  }
  .drop-title{
    color: #fff;
    padding: 7px 5px;
    line-height: 12px;
  }
  .drop-title .fa-icon{
    width: 20px;
  }
  .drop-menu-box{
    position: absolute;
    right: 0;
    top: 0;
    padding-top: 32px;
    z-index: 2;
  }
  .drop-menu{
    padding: 10px;
    width: 174px;
    border-radius: 3px;
    box-shadow: 0 0 10px 1px #b6b6b6;
    text-align: left;
  }
  .drop-menu-hide{
    display: none;
  }
  .drop-menu-item{
    display: inline-block;
    width: 25px;
    height: 25px;
    margin: 2px;
  }
  .drop-menu-item:hover{
    background-color: #e3e3e3;
  }
  .drop-menu-item i{
    font-size: 16px;
    margin: 0 5px;
  }
</style>
