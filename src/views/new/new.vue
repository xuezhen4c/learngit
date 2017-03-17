<template>
  <div class="hello">
    <Heads></Heads>
    <router-link to="/"><h1>{{ msg }}</h1></router-link>
    <table class="table table-hover" v-cloak="">
        <thead>
            <tr>
                <th class="text-right" @click="sortBy('id')">序号</th>
                <th class="text-right" @click="sortBy('name')">书名</th>
                <th class="text-right" @click="sortBy('author')">作者</th>
                <th class="text-right" @click="sortBy('price')">价格</th>
                <th class="text-right">操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(book,index) in books">
                <td class="text-right">{{book.id}}</td>
                <td class="text-right">{{book.name}}</td>
                <td class="text-right">{{book.author}}</td>
                <td class="text-right">{{book.price}}</td>
                <td class="text-right">
                    <button type="button" class="btn btn-success" @click="delBook(index)">删除</button>
                </td>
            </tr>
            <tr>
                <td class="text-right" colspan="5">
                     <h4>总价：{{sum}}</h4>
                </td>
            </tr>
        </tbody>
    </table>
    <div id="add-book">
        <legend>添加书籍</legend>
        <div class="form-group">
            <label>书名</label>
            <input type="text" class="form-control" v-model="book.name">
        </div>
        <div class="form-group">
            <label>作者</label>
            <input type="text" class="form-control" v-model="book.author">
        </div>
        <div class="form-group">
            <label>价格</label>
            <input type="text" class="form-control" v-model="book.price">
        </div>
        <button class="btn btn-primary btn-block" @click="addBook()">添加</button>
    </div>
  </div>
</template>

<script>
import Heads from 'COMPONENT/heads/heads'
export default {
  name: 'hello',
  components: {Heads},
  mounted: function () {
    this.$http.get('https://api.myjson.com/bins/r8mm').then((res) => {
      console.log(res)
      this.books = res.body
    })
  },
  data () {
    return {
      msg: 'Welcome to Your AddBook App',
      book: {
        id: 0,
        author: '',
        name: '',
        price: ''
      },
      books: [{
        id: 1,
        author: '施耐庵',
        name: '红楼梦',
        price: 32.0
      }, {
        id: 2,
        author: '曹雪芹',
        name: '水浒传',
        price: 30.0
      }, {
        id: 3,
        author: '罗贯中',
        name: '三国演义',
        price: 24.0
      }],
      sorts: []
    }
  },
  computed: {
    sum: function () {
      var result = 0
      for (var i = 0; i < this.books.length; i++) {
        result += Number(this.books[i].price)
      }
      return result
    }
  },
  methods: {
    addBook: function () {
      if (this.book.author !== '' && this.book.name !== '' && this.book.price !== '') {
        this.book.id = 1 + this.books.length
        this.book.price = parseInt(this.book.price)
        console.log(typeof (this.book.price))
        console.log(this.book)
        this.books.push(this.book)
        this.book = {id: 0, author: '', name: '', price: ''}
        console.log(this.book)
      } else {
        console.log('请填写完整')
      }
    },
    delBook: function (index) {
      this.books.splice(index, 1)
      console.log(index)
    },
    sortBy: function (sortparam) {
      this.sorts = this.books
      console.log(typeof (this.sorts[0][sortparam]))
      if (typeof (this.sorts[0][sortparam]) === 'number') {
        this.sorts.sort(function (tr1, tr2) {
          let n1 = parseInt(tr1[sortparam])
          let n2 = parseInt(tr2[sortparam])
          return n2 - n1
        })
      } else {
        this.sorts.sort(function compareFunction (tr1, tr2) {
          return tr1[sortparam].localeCompare(tr2[sortparam])
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/mixin.scss';
</style>
