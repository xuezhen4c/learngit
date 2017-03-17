<template lang="html">
  <div>
    <Heads></Heads>
    <router-link to="/Hello"><h1 class="tap">hello</h1></router-link>
    <router-link to="/"><h1 class="tap">firstpage</h1></router-link>
    <p>voteline</p>
    <ul class="list">
      <li v-for="(i,key) in list" >
        <img v-bind:src="i.images.medium" alt="">
        <p class="title">{{i.title}}</p>
        <div class="box">
          <span class="con" v-bind:style="{width:(i.rating.average*10)+'%'}"></span>
        </div>
        <span @click="toupiao(i.title,key)" class="btn score" :class="{ voted: isvoted[key] }">{{i.rating.average}}投票</span>
      </li>
    </ul>
    <!-- <modal></modal> -->
  </div>
</template>
<script>
  // import modalbox from 'COMPONENT/modalbox/modalbox'
  import Heads from 'COMPONENT/heads/heads'
  export default {
    data () {
      return {
        api_url: 'https://api.douban.com/v2/movie/top250?count=6',
        list: [],
        isvoted: [],
        scorelist: [],
        showModal: false
      }
    },
    methods: {
      toupiao: function (name, key) {
        console.log('你要给' + name + '投一票')
        this.$http.get(this.api_url, {
          params: {
            name: name
          }
        }, {
          header: {},
          emulateJSON: true
        }).then(res => {
          console.log('success')
          this.isvoted.push({name: true})
        })
      }
    },
    mounted () {
      this.$http.jsonp(this.api_url, {
        params: {
          count: 6
        }
      }, {
        header: {},
        emulateJSON: true
      }).then(res => {
        console.log(res)
        this.list = res.data.subjects
      }, res => {
        console.log(res)
      })
    },
    components: {Heads}
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
  li{
    position: relative;
    margin:0 size(20) size(10);
    border-bottom: size(1) solid #bb4cba;
    img{
      width: size(80);
      height: size(60);
    }
    .title{
      text-align: center;
    }
    .box{
      width: size(160);
      height: size(24);
      border: 1px solid #ccc;
      position: absolute;
      left: 30%;
      top: 20%;
      .con{
        height: size(24);
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        background: #ccc;
      }
    }
    .score{
      position: absolute;
      left: 80%;
      top: 25%;
    }
    .voted{
      background: #ccc;;
    }
    .btn{
      display: inline-block;
      width: size(60);
      text-align: center;
      background: #e373c7;
      border-radius: size(10);
    }
  }

</style>
