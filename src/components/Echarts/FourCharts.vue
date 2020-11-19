<template>
  <div id="main1" :style="{ width: '300px', height: '300px' }"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      this.$echarts.init(document.getElementById("main1")).setOption({
        xAxis: {
          data: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        },
        yAxis: {},
        tooltip: {},
        series: [
          // 饼图
          {
            type: "pie",
            center: ["65%", 60],
            radius: 35,
            data: [
              { name: "xx", value: 52 },
              { name: "yy", value: 54 },
              { name: "zz", value: 42 }
            ]
          },
          // 线图
          {
            type: "line",
            data: [34, 28, 45, 69, 39, 43, 33, 23, 23, 33, 39, 22]
          },
          // 柱状图
          {
            type: "bar",
            data: [20, 14, 32, 46, 24, 23, 23, 13, 16, 20, 24, 15]
          }
        ]
      });
    }
  }
};
</script>

<style></style>
