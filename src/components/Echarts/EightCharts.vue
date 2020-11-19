<template>
  <div id="myChart8" :style="{ width: '300px', height: '300px' }"></div>
</template>

<script>
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(
        document.getElementById("myChart8"),
        "light"
      );
      option = {
        series: {
          type: "scatter",
          // 普通样式
          itemStyle: {
            // 点的颜色
            color: "red"
          },
          label: {
            show: true,
            formatter: "This is a normal label."
          },
          // 高亮样式
          emphasis: {
            itemStyle: {
              // 高亮时点的颜色
              color: "blue"
            },
            label: {
              show: true,
              // 高亮时 标签的文字
              formatter: "This is a emphasis label."
            }
          }
        }
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style></style>
