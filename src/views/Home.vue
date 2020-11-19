<template>
  <div>
    <el-input placeholder="请输入个数" v-model.lazy="number"></el-input>
    <div class="container" v-for="(item, index) in list" :key="index">
      <el-input placeholder="请输入账号" v-model="item.user"></el-input>
      <el-input placeholder="请输入密码" v-model="item.pwd"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      number: "",
      temp: "",
      list: []
    };
  },

  watch: {
    number: {
      handler(newVal, oldVal) {
        if (newVal == 0) {
          this.list = [];
        }
        for (let i = 0; i < newVal; i++) {
          let obj = {
            user: "",
            pwd: ""
          };
          this.list.push(obj);
        }
      },
      immediate: true
    }
  }
};
</script>

<style lang="less" scoped>
.el-input {
  width: 320px;
  &:first-child {
    margin-right: 30px;
  }
}
.container {
  margin-top: 100px;
  display: flex;
}
</style>
