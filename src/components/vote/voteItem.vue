<template>
  <div class="github">{{popups}}
    <ul v-if="jsons">
      <li v-for="(dVote,index) in votes">
        <div class="bg-box" v-lazy:background-image="dVote.owner['avatar_url']">
          <!-- <img :src="dVote.owner['avatar_url']"> -->
          <!-- <img src="error" v-lazy="dVote.owner['avatar_url']"/> -->
        </div>
        <a :href="dVote['html_url']"><h1>{{dVote.full_name}}</h1></a>
        <h2>{{dVote.description}}</h2>
        <div class="star"><span>
          <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
          {{dVote.forks_count}}
        </span></div>
        <div class="addstar" :class="{checked: dVote['votes']}" @click="addStar(dVote.owner.id, index)">关注</div>
      </li>
    </ul>
    <ul v-else><div class="loading"><img src="../../assets/img/loading.gif"></div></ul>
    <Popup :popups="popups"></Popup>
  </div>
</template>
<script>
  import Popup from 'COMPONENT/popup/popup'
  export default {
    components: {Popup},
    props: ['votes', 'jsons', 'sPolling', 'uPost', 'popups'],
    data () {
      return {
        Polling: this.sPolling
      }
    },
    methods: {
      addStar: function (id, index) {
        if (this.Polling) {
          console.log(!this.votes[index].votes)
          this.votes[index].votes ? this.votes[index].votes : 0
          if (!this.votes[index].votes) {
            this.popups.show = 1
            this.$http.get(this.uPost.url, this.uPost.data).then((res) => {
              console.log(this.uPost)
              this.votes[index].votes = 1
              console.log(this.votes[index].votes)
              this.votes[index].forks_count = this.votes[index].forks_count + 1
              this.Polling = this.Polling - 1
              // setTimeout(this.popups.show = 0, 100000)
            })
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
