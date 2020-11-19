<template>
  <div class="container">
    <div class="red" v-if="showRed"></div>
    <div class="green" v-else></div>
    <button class="fixed" @click="aaa">Onclick</button>
  </div>
</template>

<script>
export default {
  name: 'top',
  data() {
    return {
      showRed: true
    }
  },
  methods: {
    aaa() {
      this.showRed = this.showRed == true ? false : true
      this.opt()
    },
    opt() {
      if (document.body.scrollTop) {
        document.body.scrollTop = 0
      } else {
        document.documentElement.scrollTop = 0
      }
    },
  }
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  .fixed {
    position: fixed;
    bottom: 30px;
    right: 30px;
  }
}
.red {
  width: 300px;
  height: 1800px;
  background-color: red;
}
.green {
  width: 300px;
  height: 1800px;
  background-color: green;
}
</style>