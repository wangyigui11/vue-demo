<template>
  <div>
    <router-link to="/foo">Go to Foo</router-link><br />
    <router-link to="/bar">Go to Bar</router-link>

    <el-input v-model="ruleForm.id" placeholder="请输入id"></el-input>
    <el-button @click="goUser(2)">去user</el-button>
  </div>
</template>

<script>
import { log } from "util";
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        id: ""
      }
    };
  },
  methods: {
    /*
      路由传参的三种基本方式
      1.   @click="insurance(2)"
           insurance(id) {
             this.$router.push({
               path:`/particulars/${id}`
             })
           }
        配置路由信息
        获取参数如下  this.$route.params 可以获取当前路由
      2.  insurance(id) {
            this.$router.push({
              name:'particulars',
              params:{
                id:id
              }
            })
          }
        使用params来携带参数
      3. insurance(id){
        this.$router.push({
          path:'/particulars'
          query: {
            id:id
          }
        })
      }
      query传递的参数会显示在url后面?id=?
      获取参数 this.$route.query.id

      全局前置守卫  router.beforeEach  接受三个参数 to -- 要进入的目标  from -- 要离开的路由  next -- 

      query 和 params 两者传递参数的区别是什么？

      1. query 传参配置的是path, 而params 传参配置的是name， 在 params中配置path无效
      2. query 在路由配置不需要设置参数， 而params必须设置
      3. query 传递的参数会显示在地址栏中
      4. params传参刷新会无效， 但是query会保存传递过来的值， 刷新不变


      
    */
    goUser() {
      // this.$router.push({
      //   path: `/user/${this.ruleForm.id}`
      // });
      this.$router.push({
        name: "user",
        params: {
          id: 2
        }
      });
    }
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      console.log("to", to); //新路由信息
      console.log("from", from); //老路由信息
    }
  }
};
</script>

<style lang="less" scoped>
.short {
  width: 200px !important;
}
span {
  font-size: 14px;
  color: red;
}
</style>
