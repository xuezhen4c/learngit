<template lang="html">
  <div>
    <Heads></Heads>
    <router-link to="/"><h1 class="tap">firstpage</h1></router-link>
    <div class="zhuanpan">
      <div v-bind:style="degObj" class="zhizhen" @click="triger()">
      </div>
    </div>
  </div>
</template>

<script>
import Heads from 'COMPONENT/heads/heads'
export default {
  data () {
    return {
      dbox: null, // 存放动画用来清除
      dtime: 2, // 一次动画间隔时间
      deg: 0, // 当前的指针角度
      cc: 2, // 一次变化的增量
      quan: 2, // 旋转停止前圈数
      odeg: 0, // 最后一圈的角度
      stopdeg: 0, // 停止时候的角度
      onmove: false, // 转盘是否在旋转中
      cishu: 0, // 剩余可用抽奖次数
      prize: '', // 传入的获得的奖品
      degObj: { // 旋转时候指针的行内样式角度
        transform: ''
      },
      jiang: [
        [0, 45, '未中奖'],
        [46, 95, '6等奖'],
        [96, 149, '5等奖'],
        [150, 207, '4等奖'],
        [208, 258, '3等奖'],
        [259, 315, '2等奖'],
        [316, 360, '1等奖']
      ]
    }
  },
  created: function () {
    this.cishu = 3
  },
  mounted: function () {
  },
  methods: {
    // 点击按钮触发运动定时器
    triger: function () {
      // 这里通过请求获得最终奖品
      this.prize = '5等奖'
      if (!this.onmove) {
        if (this.cishu === 0) {
          console.log('没有抽奖机会了')
        } else {
          this.cishu -= 1
          this.deg = 0
          this.odeg = this.setAngle(this.prize)
          this.stopdeg = this.quan * 360 + this.odeg
          this.dbox = setInterval(this.move, this.dtime)
        }
      }
    },
    // 运动函数
    move: function () {
      this.onmove = true
      this.stopdeg = this.quan * 360 + this.odeg
      this.deg += this.cc
      if (this.deg > this.stopdeg) {
        clearInterval(this.dbox)
        let _this = this
        setTimeout(function () {
          alert(_this.is(_this.odeg))
          _this.degObj.transform = 'rotate(' + 0 + 'deg)'
          _this.onmove = false
        }, 300)
      } else {
        this.degObj.transform = 'rotate(' + this.deg + 'deg)'
      }
    },
    // 根据角度判断当前奖项
    is: function (deg) {
      var res = '未中奖'
      for (let i = 0; i < this.jiang.length; i++) {
        if (deg >= this.jiang[i][0] && deg < this.jiang[i][1]) {
          res = this.jiang[i][2]
        }
      }
      return res
    },
    // 根据返回的几等奖生成奖品区间的指针随机角度
    setAngle: function (prize) {
      let mindeg, maxdeg
      for (var i = 0; i < this.jiang.length; i++) {
        if (prize === this.jiang[i][2]) {
          mindeg = this.jiang[i][0]
          maxdeg = this.jiang[i][1]
        }
      }
      return mindeg + Math.floor(Math.random() * (maxdeg - mindeg + 1))
    }
  },
  components: {Heads}
}
</script>

<style lang="scss">
  @import "../../assets/scss/mixin.scss";
  .zhuanpan{
    position: relative;
    background: url(../../assets/img/pan.png) no-repeat left top;
    background-size: 100% 100%;
    width: size(300);
    height: size(300);
    margin: 50px auto;
    .zhizhen{
      position: absolute;
      width: size(100);
      height: size(120);
      left: size(100);
      top: size(90);
      background: url(../../assets/img/zhen.png) no-repeat left top;
      background-size: 100% 100%;
      z-index: 999;
      cursor: pointer;
      animation: zhuanpan 2s linear infinite forwords;
      transform: rotate(0deg);
      transform-origin: size(50) size(70);
      @keyframes zhuanpan{
        0%{
          transform: rotate(0deg);
        }
        100%{
          transform: rotate(360deg);
        }
      }
    }
  }
</style>
