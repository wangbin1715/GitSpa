<template>
  <div class="new3">
    <h1>{{msg}}</h1>
    <Button @click="btn">加载</Button>
    <Button @click="close">更改state</Button>
    <input type="text" v-model="datas">
    <h1>{{author}}</h1>
  </div>
</template>

<script>
import { Indicator, Button } from 'mint-ui'
export default {
  name: 'new3',
  components: {
    Button,
    Indicator
  },
  data () {
    return {
      msg: 'this is my three page !',
      datas: ''
    }
  },
  computed: {
    author () {
      return '访问地址：http://www.' + this.$store.state.author + '.com'
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
    }
  }
}
</script>

<style>
  .new3{
    background: blue;
  }
  h1{
    color: white;
  }
</style>
