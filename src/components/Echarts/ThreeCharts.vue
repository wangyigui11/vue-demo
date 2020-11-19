<template>
  <div id="main" :style="{ width: '300px', height: '300px' }"></div>
</template>

<script>
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      this.$echarts.init(document.getElementById("main")).setOption({
        title: { text: "Line Chart" },
        tooltip: {},
        toolbox: {
          feature: {
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            },
            restore: {}
          }
        },
        xAxis: {},
        yAxis: {},
        series: [
          {
            type: "line",
            smooth: true,
            data: [
              [12, 5],
              [24, 20],
              [36, 36],
              [48, 10],
              [60, 10],
              [72, 20]
            ]
          }
        ]
      });
    }
  }
};
</script>

<style></style>
