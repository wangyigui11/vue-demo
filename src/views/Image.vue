<template>
  <div>
    <div>
      <div class="big"></div>
      <div class="big"></div>
      <el-button @click="onPreview">预览</el-button>
      <div class="big"></div>
      <div class="big"></div>
      <el-image-viewer v-if="showViewer" :on-close="closeViewer" :url-list="[url]" />
    </div>
  </div>
</template>

<script>
// 导入组件
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
export default {
  name: 'image',
  components: { ElImageViewer },
  data() {
    return {
      scrollTop: '',
      showViewer: false, // 显示查看器
      url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  },
  methods: {
    onPreview() {
      this.showViewer = true
      this.afterOpen()
    },
    // 关闭查看器
    closeViewer() {
      this.showViewer = false
      this.beforeClose()
    },
    // 显示时调用
    afterOpen() {
      // this.scrollTop = document.scrollingElement.scrollTop

      // document.body.style.position = 'fixed'
      // // document.body.style.top = -this.scrollTop + 'px'
      // document.body.style.top = -this.scrollTop + 'px'
      // console.log('top', -this.scrollTop);
    },
    // 关闭时调用
    beforeClose() {
      document.body.style.position = ''
      document.body.style.top = ''
      document.scrollingElement.scrollTop = this.scrollTop
    }
  }
}
</script>
<style lang="less" scoped>
.big {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>