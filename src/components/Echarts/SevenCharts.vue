<template>
  <div id="myChart7" :style="{ width: '300px', height: '300px' }"></div>
</template>

<script>
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom 初始化 echarts 实例
      var myChart = this.$echarts.init(document.getElementById("myChart7"));
      // 绘制表格
      myChart.setOption({
        tooltip: {}, // 悬停上去有提示消息
        backgroundColor: "#2c343c", // 全局的背景色
        textStyle: {
          color: "rgba(255,255,255,0.3)"
        }, // 文本的样式
        labelLine: {
          // 线的颜色
          lineStyle: {
            color: "rgba(255,255,255,0.3)"
          }
        },
        series: [
          {
            name: "显示",
            type: "pie",
            roseType: "angle", // 南丁格尔图会通过半径表示数据的大小
            itemStyle: {
              color: "#c23531", // 扇形的颜色
              shadowBlur: 200, // 阴影的大小
              shadowOffsetX: 0, // 阴影水平方向上的偏移
              shadowOffsetY: 0, // 阴影垂直方向上的偏移
              shadowColor: "rgba(0,0,0,0.5)", // 阴影颜色
              visualMap: {
                // 不显示 visualMap 组件，只用于明暗度的映射
                show: false,
                // 映射的最小值为 80
                min: 80,
                // 映射的最大值为 600
                max: 600,
                inRange: {
                  // 明暗度的范围是 0 到 1
                  colorLightness: [0, 1]
                }
              }
            },
            radius: "55%",

            // data: [
            //   { value: 235, name: "视频广告", itemStyle: { color: "#D7504B" } },
            //   { value: 274, name: "联盟广告", itemStyle: { color: "#5793F3" } },
            //   { value: 310, name: "邮件营销", itemStyle: { color: "#DA9CFF" } },
            //   { value: 335, name: "直接访问", itemStyle: { color: "#27727B" } },
            //   { value: 400, name: "搜索引擎", itemStyle: { color: "#E87C25" } }
            // ]
            data: [
              { value: 235, name: "视频广告" },
              { value: 274, name: "联盟广告" },
              { value: 310, name: "邮件营销" },
              { value: 335, name: "直接访问" },
              { value: 400, name: "搜索引擎" }
            ]
          }
        ]
      });
    }
  }
};
</script>

<style></style>
