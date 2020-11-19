<template>
  <div>foo</div>
</template>

<script>
export default {
  /*
      导航分两种
          声明式导航  <router-link to="..."></router-link>

          编程式导航  router.push(...)
          // 字符串
          router.push('home)
          // 对象
          router.push({ path: 'home'})
          // 命名路由
          router.push({
            name:'user',
            params:{
              userId:'123'
            }
          })
          router.push({
            name:'user',
            query:{
              plan:'private'
            }
          })


  */
  // beforeRouteEnter(to, from, next) {
  //   // 在渲染该组件的对应路由被confirm前 调用
  //   // 不能获取足见实力 this
  //   // 因为当守卫执行前、组件实例还没被创建
  // },
  // beforeRouteUpdate(to, from, next) {
  //   // 在当前路由改变 但是该组件被复用时调用
  //   // 举例来说 对于一个带有动态参数的路径 /foo/:id, 在/foo/1 和 /foo/2 之间跳转的时候
  //   // 由于会渲染同样的Foo组件， 因此足见实力会被复用。 而这个钩子就会在这个情况下被调用
  //   // 可以访问组件实例 'this'
  // },
  // beforeRouteLeave(to,from,next){
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例  'this'
  // },
  // router.beforeEach((to,from,next) => {
  //   if(to.matched.some(record => record.meta.requiresAuth)){
  //     if(!auth.loggedIn()) {
  //       next({
  //         path:'/Login',
  //         query:{redirect: to.fullPath}
  //       })
  //     }
  //   }
  // })
};
</script>

<style></style>
