import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 数据
  state: {
    count: 1,
    nickname: 'zhangsan',
    age: 18,
    gender: '男',
    todo: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: true }
    ]
  },
  // 计算属性 
  getters: {
    doneTodos: state => {
      return state.todo.filter(todo => todo.done == true).length
    },
    falseTodos: state => {
      return state.todo.filter(todo => todo.done == false).length
    }
  },
  // 同步方法
  mutations: {
    increment (state) {
      state.count++
    },
    updateCount (state, payload) {  // state 为 数据  避免 this.state ， payload为传递过来的形参
      state.count = payload
    },
    editNickname (state, payload) {
      state.nickname = payload
    },
    arrayPush () {
      let obj = {
        id: this.state.todo.length,
        text: 'xxx',
        done: Math.random() * 10 > 5
      }
      this.state.todo.push(obj)
    }
  },
  // 异步方法 触发mutations
  actions: {
    incre ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  modules: {
  }
})
