<!--
 * @Author: wangshuzhao
 * @Date: 2022-09-30 16:57:58
 * @LastEditors: wangshuzhao
 * @LastEditTime: 2022-10-01 15:08:29
 * @Description: 
-->
<template>
  <div class="tip" v-if="datas.innerHTML">
    <!-- <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405223/starwars/item-4-bg.webp" alt="" /> -->
    <div class="imgTop" v-html="datas.innerHTML">
      <!-- <div class="c-my-node"
        style="background-image: url(https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2677153550,2207805387&amp;fm=58&amp;app=83&amp;f=JPEG?w=250&amp;h=250&amp;s=249039DDC2D153D411A851360300C062);border:#ff875e solid 3px;">
        <div class="c-node-name" style="color:#ff875e">李达康</div>
      </div> -->

    </div>
    <div class="title">{{ datas.text }}</div>
    <div class="des">{{datas.data?.introduce}}</div>
    <div class="connect" ref="imgBot" :style="{backgroundColor: colors[this.sel]}">
      <div class="a">
        <div v-if="relation.Family?.length" class="b" :style="{backgroundColor: colors.Family}"
          @click="changeTab('Family')">
          Family
        </div>
        <div v-if="relation.Romance?.length" class="b " :style="{backgroundColor: colors.Romance}"
          @click="changeTab('Romance')">
          Romance
        </div>
        <div v-if="relation.Friends?.length" class="b " :style="{backgroundColor: colors.Friends}"
          @click="changeTab('Friends')">
          Friends
        </div>
        <div v-if="relation.Enemies?.length" class="b " :style="{backgroundColor: colors.Enemies}"
          @click="changeTab('Enemies')">
          Enemies
        </div>
      </div>
      <div class="imgBot">
        <div v-for="item in nodes">
          <div v-html="item.innerHTML" @click="select(item.id)"></div>
        </div>
        <!-- <div class="c-my-node"
          style="background-image: url(https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2677153550,2207805387&amp;fm=58&amp;app=83&amp;f=JPEG?w=250&amp;h=250&amp;s=249039DDC2D153D411A851360300C062);border:#ff875e solid 3px;">
          <div class="c-node-name" style="color:#ff875e">李达康</div>
        </div>
        <div class="c-my-node"
          style="background-image: url(https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2677153550,2207805387&amp;fm=58&amp;app=83&amp;f=JPEG?w=250&amp;h=250&amp;s=249039DDC2D153D411A851360300C062);border:#ff875e solid 3px;">
          <div class="c-node-name" style="color:#ff875e">李达康</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { colors } from '../../data';
export default {
  name: "Tip",
  props: {
    datas: {
      type: Object,
      // default:()=>({
      //   innerHTML: '',

      // })
    },
    allNode: Array
  },

  watch: {
    'datas.innerHTML'() {
      console.log(this.datas)
      const r = Object.keys(this.datas.data.relation)
      for (let i = 0; i < 4; i++) {
        if (this.datas.data.relation[r[i]].length) {
          this.sel = r[i]
          break
        }
      }

    },
  },

  data() {
    return {
      sel: 'Family',
      colors,
      // nodes:[],
    }
  },
  computed: {
    nodes() {
      return this.allNode.filter(e => this.datas?.data?.relation?.[this.sel]?.includes(e.id))
    },
    relation() {
      return this.datas.data.relation
    }
  },
  methods: {
    changeTab(color) {
      this.sel = color;
    },
    select(id) {
      this.$emit('changeSel', id)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
@import "./index.less";
</style>
