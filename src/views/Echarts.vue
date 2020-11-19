<template>
  <!-- 
    系列(series):  一组数值以及他们映射成的图， 不仅表示数据，也表示数据映射成为的图， 可以理解为 系列是专门绘制图的组件
    包含的要素至少有:  一组数值、图表类型、以及其他的关于这些数据如何映射成图的参数
    echarts中系列类型(series type)就是图表类型。 包括 line(折线图) bar(柱状图) pie(饼图) scatter(散点图) graph(关系图) tree(树图)
    echarts中系列数据(series data)

    组件(component) 在系列之上， echarts中各种内容， 被抽象为"组件"
    xAxis(直角坐标系X轴)  yAxis(直角坐标系Y轴) grid(直角坐标系地板) angleAxis(极坐标系角度轴) radiusAxis(极坐标系半径轴)
    polar(极坐标系地板)   geo(地理坐标系)  dataZoom(数据区缩放组件) visualMap(视觉映射组件)  toolTip(提示框组件)  toolbox(工具栏组件) 
    
    组件的定位: 不同的组件、系列、常有不同的定位方式
    多数组件和系列，都能够基于top/ right/ down/ left/ width/ height绝对定位， 这种定位的方式, 类似于CSS的绝对定位， 绝对定位基于的是Echarts容器的DOM节点
    eg: bottom:54  距离地边界54px  right:'20%' 距离右边界的距离是 rongqiu 容器宽度的20%
 -->
  <!-- 
   Echarts中的样式简介
   颜色主体(Theme)  调色盘  直接样式设置(itemStyle、lineStyle、areaStyle、label)  视觉映射(visualMap)
   var chart = echarts.init(dom,'颜色主题')  颜色主题 有 light/dark 两种
  -->
  <div class="container">
    <one-charts class="bd"></one-charts>
    <two-charts class="bd"></two-charts>
    <three-charts class="bd"></three-charts>
    <four-charts class="bd"></four-charts>
    <five-charts class="bd"></five-charts>
    <six-charts class="bd"></six-charts>
    <seven-charts class="bd"></seven-charts>
    <eight-charts class="bd"></eight-charts>
  </div>
</template>

<script>
import OneCharts from "../components/Echarts/OneCharts";
import TwoCharts from "../components/Echarts/TwoCharts";
import ThreeCharts from "../components/Echarts/ThreeCharts";
import FourCharts from "../components/Echarts/FourCharts";
import FiveCharts from "../components/Echarts/FiveCharts";
import SixCharts from "../components/Echarts/SixCharts";
import SevenCharts from "../components/Echarts/SevenCharts";
import EightCharts from "../components/Echarts/EightCharts";
export default {
  components: {
    OneCharts,
    TwoCharts,
    ThreeCharts,
    FourCharts,
    FiveCharts,
    SixCharts,
    SevenCharts,
    EightCharts
  }
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  .bd {
    border: 1px solid red;
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
</style>
