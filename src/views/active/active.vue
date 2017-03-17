<template>
  <div>
    <Heads></Heads>
    <router-link to="/Hello"><h1 class="tap">{{msg}}</h1></router-link>
    <router-link to="/voteline"><h1 class="tap">tovoteline</h1></router-link>
    <router-link to="/zhuanpan"><h1 class="tap">zhuanpan</h1></router-link>
    <VoteItem :votes="votes" :popups="popups" :jsons="jsons" :sPolling="sPolling" :uPost="uPost"></VoteItem>
  </div>
</template>
<script>
import Heads from 'COMPONENT/heads/heads'
import VoteItem from 'COMPONENT/vote/voteitem'
// import Popup from './Popup/Popup'
export default {
  mounted: function () {
    this.$http.get('https://api.github.com/search/repositories?q=javascript&sort=stars').then((res) => {
      this.votes = res.body.items
      this.jsons = 1
    })
  },
  data () {
    return {
      msg: 'Welcome to Your JavaScript App',
      jsons: 0,
      sPolling: 6,
      uPost: {
        url: 'https://api.github.com/search/repositories?q=javascript&sort=stars',
        data: {
          id: 123
        }
      },
      popups: {
        type: 'alert',
        show: 0,
        uImg: '',
        text: ['恭喜您，修改成功恭喜您，修改成功恭喜您修改成功恭喜您'],
        time: 3000
      },
      votes: []
    }
  },
  components: {VoteItem, Heads}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/mixin.scss';
  .logo{
    width: size(50);
    margin: auto;
    display: inline-block;
  }
  .header{
    text-align: center;
    height: size(44);
    background: #b30818;
    color: #FFF;
    font-weight: bold;
    span{
      @include font-size(18px);
      line-height: size(44);
      position: relative;
      &:after{
        content: '';
        background: url(../../assets/img/logo.png) 100% 100% no-repeat;
          background-size: 100%;
        width: size(20);
        height: size(20);
        position: absolute;
        left: 0;
        margin-left: size(-30);
        margin-top: size(10);
      }
    }
  }
  .tap{
    @include font-size(16px);
    text-align: center;
    line-height: size(40);
    color: #4da577;
  }
  .loading{
    width: size(200);
    height: size(200);
    margin: auto;
    overflow: hidden;
  }
  .github{
    width: size(375);
    margin: auto;
      box-sizing: border-box;
    overflow: visible;
    ul{
      padding-left: size(10);
    }
    li{
      float: left;
      width: size(172.5);
      margin-right: size(10);
      margin-bottom: size(10);
      overflow: hidden;
      box-shadow: 4px 4px 18px rgba(0,0,0,0.46);
      .bg-box {
          height: 0;
          background-size: cover;
          // padding-bottom: 100%;
          width: size(172.5);
          height: size(172.5);
          overflow: hidden;
          background-image: url(../../assets/img/loading.gif);
        // border-radius: size(10);
      }
      .bg-box[lazy=loaded] {
          background-size: cover;
          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          -webkit-animation-name: fadeIn;
          animation-name: fadeIn;
      }
      h1{
        line-height: size(30);
        color: #4da577;
        padding: 0 size(6);
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        @include font-size(14px);
      }
      h2{
        line-height: size(16);
        @include font-size(12px);
        padding: 0 size(6);
        height: size(32);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .star{
        text-align: center;
        span{
          line-height: size(40);
          @include font-size(14px);
          position: relative;
          color: #4da577;
          .octicon{
            width: size(15);
            height: size(15);
            position: absolute;
            left: size(-18);
            top: size(-1);
            fill: currentColor;
          }
        }
      }
      .addstar{
        width: size(80);
        height: size(30);
        border-radius: size(20);
        line-height: size(30);
        margin: size(10) auto;
        background: #e4071c;
        text-align: center;
        color: #FFF;
        @include font-size(16px);
      }
      .checked{
        background: #666;
      }
    }
  }
</style>
