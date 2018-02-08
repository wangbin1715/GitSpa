<template>
  <div class="new4">
    <h1>{{msg}}</h1>
    <Button @click="btn">加载</Button>
    <Button @click="close">更改state</Button>
    <input type="text" v-model="datas">
    <Button type="danger" @click="countplus">+</Button>
    <Button type="primary" @click="countsub">-</Button>
    <h1>{{author}}</h1>
    <h5>{{count}}</h5>
    <Button @click="showto">{{content}}</Button>
    <Button @click="gethost">获取主机域名</Button>
    <div v-show="show" class="stack">stack</div>
    <div class="LH">我是父级DIV<p>我是子集content</p></div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import { Indicator, Button } from 'mint-ui'
export default {
  name: 'new4',
  components: {
    Button,
    Indicator
  },
  data () {
    return {
      msg: 'this is my four page !',
      datas: '',
      show: false,
      content: '显示'
    }
  },
  computed: {
    author () {
      return '第四个界面：http://www.' + this.$store.state.author + '.com'
    },
    count () {
      return '当前计算属性为：' + this.$store.state.count
    }
  },
  methods: {
    btn () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      setTimeout(() => { Indicator.close() }, 2000)
    },
    close () {
      this.$store.commit('newauthor', this.datas)
    },
    showto () {
      this.show = !this.show
      if (this.content === '显示') {
        this.content = '隐藏'
      } else {
        this.content = '显示'
      }
    },
    gethost () {
      alert(document.domain)
    },
    ...mapActions(['countplus', 'countsub'])
  }
}
</script>

<style>
  .new4{
    background: deeppink;
    padding: 20px;
  }
  h1{
    color: white;
  }
  .stack{
    width: 100%;
    height: 200px;
    background: purple;
    text-align: center;
    line-height: 200px;
    font-size: 50px;
    padding: 50px;
  }
  .LH{
    width: 100%;
    font-size: 20px;
    line-height: 1.5;
    background: orange;
  }
  .LH>p{
    font-size: 40px;
    background: gray;
  }
</style>
