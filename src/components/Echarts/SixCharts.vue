<template>
  <div id="myChart6" :style="{ width: '300px', height: '300px' }"></div>
</template>

<script>
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom 初始化 echarts 实例
      var myChart = this.$echarts.init(document.getElementById("myChart6"));
      // 绘制表格
      var option = {
        xAxis: {
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: [{}, {}],
        tooltip: {},
        series: [
          {
            type: "bar",
            data: [242, 344, 324, 475, 264, 467, 531],
            yAxisIndex: 0
          },
          {
            type: "line",
            data: [44, 51, 32, 19, 33, 24, 12],
            yAxisIndex: 1
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style></style>
