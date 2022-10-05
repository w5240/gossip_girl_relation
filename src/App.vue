<template>
  <div class="wrapper">
    <div class="rela"
      :style="{width: select.innerHTML ? 'calc(100% - 500px)' : '100%', height: 'calc(100% - 60px)', position: 'relative', paddingTop: '60px'}">
      <!-- <div class="title1">gossip girl <span>relationships map</span></div> -->
      <SeeksRelationGraph ref="seeksRelationGraph" :options="options" :on-node-click="onNodeClick" />
      <div class="bg"></div>
    </div>
    <Tip :datas="select" :allNode="allNode" @changeSel="change" />
  </div>
</template>

<script>
import SeeksRelationGraph from "./components/relation/index";
import Tip from "./components/tip/index.vue";
import { data } from "./data";
import { options } from './options';

export default {
  name: "App",
  components: { SeeksRelationGraph, Tip },
  data() {
    return {
      demoname: "---",
      options,
      select: {},
      allNode: [],
    };
  },
  mounted() {
    this.ref = this.$refs.seeksRelationGraph;
    this.showSeeksGraph();
  },
  methods: {
    showSeeksGraph() {
      // 以上数据中的node和link可以参考"Node节点"和"Link关系"中的参数进行配置
      this.ref.setJsonData(data, () => {
        // seeksRGGraph
        // const a = this.ref.getLines();
        this.allNode = this.ref.getNodes()
        // console.log((a[0].relations[0].color = "#ff0000"));
      });
    },
    onNodeClick(nodeObject) {
      this.ref.getNodes().forEach(e => e.select = false)
      this.select = nodeObject
      nodeObject.selected = true;
      // $event
      // console.log(this.ref.getNodes());
      // 处理线
      this.ref.getLines().forEach(e => { e.relations[0].color = 'gray' });
      this.ref.getLines().filter(e => e.fromNode === nodeObject || e.toNode === nodeObject).forEach(e => {
        e.relations[0].color = e.relations[0].data.color
      })

      // 处理节点
      this.ref.getNodes().forEach(e => { e.opacity = 0.3 });
      nodeObject.targetNodes.forEach(e => { e.opacity = 1 });
      nodeObject.opacity = 1;
      // getNodeById
      // getLines
      // this.$refs.seeksRelationGraph.focusNodeById(nodeObject.id);
    },
    onLineClick(lineObject) {
      // $event
      console.log("onLineClick:", lineObject);
    },
    change(id) {
      // this.ref.focusNodeById(id)
      // console.log(this.ref.getNodes(), this.ref.getNodes().find(e => e.selected === true))
      // console.log(this.ref.getNodes().find(e => e.selected === true).el);
      // this.ref.getNodes().find(e => e.selected === true).el.querySelector('.rel-node-checked').classList.remove('rel-node-checked')
      // this.ref.getNodes().find(e => e.selected === true).el.querySelector('.rel-node-selected').classList.remove('rel-node-selected')
      this.onNodeClick(this.ref.getNodeById(id));
    }
  },
};
</script>
<style lang="less">
@import "./reset.less";
</style>
<style lang="less" >
@import './indes.less';
</style>
