<template>
  <div id="myChart5" :style="{ width: '300px', height: '300px' }"></div>
</template>

<script>
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom 初始化 echarts 实例
      var myChart = this.$echarts.init(document.getElementById("myChart5"));
      // 绘制表格
      var option = {
        xAxis: {},
        yAxis: {},
        tooltip: {},
        series: {
          type: "scatter",
          data: [
            [13, 44],
            [51, 51],
            [51, 32],
            [67, 19],
            [19, 33]
          ]
        }
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style></style>
