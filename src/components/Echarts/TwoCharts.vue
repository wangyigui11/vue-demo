<template>
  <div id="myChart2" :style="{ width: '300px', height: '300px' }"></div>
</template>

<script>
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom 初始化 echarts 实例
      let myChart = this.$echarts.init(
        document.getElementById("myChart2"),
        "dark"
      );
      // 绘制表格
      myChart.setOption({
        // 标题
        series: {
          type: "pie",
          name: "数据",
          data: [
            { name: "A", value: 1212 },
            { name: "B", value: 2323 },
            { name: "C", value: 1919 }
          ]
        }
      });
    }
  }
};
</script>

<style></style>
