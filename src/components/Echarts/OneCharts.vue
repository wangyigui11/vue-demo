<template>
  <div class="echarts">
    <div id="myChart" :style="{ width: '300px', height: '300px' }"></div>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      colorList: [
        "#FFC367",
        "#5793F3",
        "#DA9CFF",
        "#27727B",
        "#5D84FF",
        "#C1232B",
        "#B5C334",
        "#FCCE10",
        "#E87C25",
        "#FE8463",
        "#9BCA63",
        "#FAD860",
        "#F3A43B",
        "#60C0DD",
        "#D7504B",
        "#C6E579",
        "#F4E001",
        "#F0805A",
        "#26C0C0"
      ]
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom , 初始化 echarts 实例
      let myChart = this.$echarts.init(
        document.getElementById("myChart"),
        "light"
      );
      // 绘制图表
      myChart.setOption({
        // title  标题
        // title: { text: "在vue中使用echarts" },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        color: "#60C0DD",
        lineStyle: {
          width: 3 //  线条粗细
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
};
</script>

<style></style>
