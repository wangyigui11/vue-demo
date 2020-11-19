<template>
  <div class="container">
    <div class="row">
      <div class="left">
        <div class="title">{{basicForm.title}}</div>
        <input class="content" v-model="basicForm.content" type="text" />
      </div>
      <div class="right">
        <div class="title">{{basicForm.title}}</div>
        <input class="content" v-model="basicForm.content" type="text" />
      </div>
    </div>
    <div class="row">
      <div class="left">
        <div class="title bd">{{basicForm.title}}</div>
        <input class="content" v-model="basicForm.content" type="text" />
      </div>
      <div class="right">
        <div class="title">{{basicForm.title}}</div>
        <input class="content" v-model="basicForm.content" type="text" />
      </div>
    </div>
    <div class="row">
      <div class="left">
        <div class="title bd">{{basicForm.title}}</div>
        <input class="content" v-model="basicForm.content" type="text" />
      </div>
      <div class="right">
        <div class="title">{{basicForm.title}}</div>
        <input class="content" v-model="basicForm.content" type="text" />
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      basicForm:
      {
        title: '工单编号',
        content: '21DXXXX'
      }
    }
  }

}
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  height: 800px;
  background: #184868;
  margin: 100px auto;
  padding: 30px;

  .row {
    display: flex;
  }
  .left,
  .right {
    display: flex;
    flex: 1;
    height: 40px;
    .title {
      width: 50%;
      background: #3a6785;
      color: #fff;
      line-height: 40px;
      font-size: 14px;
      padding-left: 20px;
    }
    .content {
      width: 50%;
      padding-left: 25px;
      border: 1px solid #416d8a;
      background: #184868;
      color: #fff;
    }
  }
  .right {
    flex: 1;
  }
}
.bd {
  border: 1px solid #416d8a;
}
</style>