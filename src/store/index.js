import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const colorsObj = {
  'lightblue': {
    'name': 'bind_lightblue',
    'bgColors': '#02a2aa',
    'hoverColor': '#009198',
    'textColor': '#fff',
    'iconColor': '#02a2aa',
    'leftMenuBgColor': '#ffffff',
    'leftMenuTextColor': '#000000',
    'leftMenuTextActive': '#fff'
  },
  'blue': {
    'name': 'bind_blue',
    'bgColors': '#05a7d8',
    'hoverColor': '#008bb5',
    'textColor': '#fff',
    'iconColor': '#05a7d8',
    'leftMenuBgColor': '#ffffff',
    'leftMenuTextColor': '#000000',
    'leftMenuTextActive': '#fff'
  },
  'red': {
    'name': 'bind_red',
    'bgColors': '#e13030',
    'hoverColor': '#b10909',
    'textColor': '#fff',
    'iconColor': '#e13030',
    'leftMenuBgColor': '#ffffff',
    'leftMenuTextColor': '#000000',
    'leftMenuTextActive': '#fff'
  },
  'green': {
    'name': 'bind_green',
    'bgColors': '#00a65a',
    'hoverColor': '#198b25',
    'textColor': '#fff',
    'iconColor': '#00a65a',
    'leftMenuBgColor': '#222d32',
    'leftMenuTextColor': '#b8c7ce',
    'leftMenuTextActive': '#fff'
  }
}

export default new Vuex.Store({
  state: {
    chooseLeftMenu: 0,
    screenHeight: document.documentElement.clientHeight - 70,
    chooseColor: colorsObj['blue'],
    leftMenuIsHidden: false,
    editableTabs: [],
    editableTabsSelect: 0
  },
  mutations: {
    changeColor (state, color) {
      state.chooseColor = colorsObj[color]
    },
    changeScreenHeight (state, height) {
      state.screenHeight = height
    },
    changeEditableTabs (state, data) {
      if (data.type === 'replace') {
        state.editableTabs = [data]
        state.editableTabsSelect = 0
      }
      if (data.type === 'add') {
        let isInArr = false
        for (let i = 0, n = state.editableTabs.length; i < n; i++) {
          if (state.editableTabs[i].id === data.id) {
            state.editableTabsSelect = i
            isInArr = true
          }
        }
        if (!isInArr) {
          state.editableTabs.push(data)
          state.editableTabsSelect = (state.editableTabs.length - 1).toString()
        }
      }
      if (data.type === 'remove') {
        if (data.index <= state.editableTabsSelect) {
          state.editableTabsSelect = state.editableTabsSelect - 1
        }
        state.editableTabs.splice(data.index, 1)
      }
      if (data.type === 'removeAll') {
        state.editableTabsSelect = 0
        state.editableTabs = []
      }
      if (data.type === 'removeRight') {
        if (data.index <= state.editableTabsSelect) {
          state.editableTabsSelect = data.index
        }
        state.editableTabs.splice((data.index + 1), (state.editableTabs.length - (data.index + 1)))
      }
      if (data.type === 'removeLeft') {
        if (data.index >= state.editableTabsSelect) {
          state.editableTabsSelect = 0
        } else {
          state.editableTabsSelect = state.editableTabsSelect - data.index
        }
        state.editableTabs.splice(0, data.index)
      }
    },
    chooseLeftMenu (state, index) {
      state.chooseLeftMenu = index
    },
    chooseEditableTabsSelect (state, index) {
      state.editableTabsSelect = index
    },
    setLeftMenuIsHidden (state, index) {
      state.leftMenuIsHidden = index
    }
  }
})
