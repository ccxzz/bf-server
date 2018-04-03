// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Col, Row, Dropdown, DropdownMenu, DropdownItem, Menu, MenuItem, Submenu
  , MenuItemGroup, Form, FormItem, Input, Select, Option, DatePicker, TimePicker, Switch, CheckboxGroup
  , Checkbox, Radio, RadioGroup, Button, Dialog, Tree, Message, Tabs, TabPane, Card, Table, TableColumn
  , Tag} from 'element-ui'
// import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import axios from 'axios'
import VueAxios from 'vue-axios'
import configData from './config/config'
import echarts from 'echarts'

import VueContextMenu from 'vue-contextmenu'
Vue.use(VueContextMenu)
Vue.use(VueAxios, axios)
Vue.use(configData)
Vue.component('icon', Icon)

// Vue.use(VueResource)
Vue.use(Col)
Vue.use(Row)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Switch)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Tree)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.prototype.$message = Message
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
