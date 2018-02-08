<template>
  <div class="new1">
    <h1>{{msg}}</h1>
    <h2>当前作者名为：{{author}}</h2>
    <h3>{{ganauthor}}</h3>
    <Button type="primary" @click="change">这里是我的第一个界面！</Button>
  </div>
</template>

<script>
import { Button, Spinner } from 'mint-ui'
export default {
  name: 'new1',
  components: {
    Spinner,
    Button
  },
  data () {
    return {
      msg: 'this  is my first page !'
    }
  },
  computed: {
    author () {
      return this.$store.state.author + '--computed'
    },
    ganauthor () {
      return this.$store.getters.ganauthor
    }
  },
  methods: {
    change () {
      this.$store.state.author = Math.round(Math.random() * 10)
    }
  }
}
</script>

<style>
  .new1{
    height: 100%;
    width: 100%;
    color: gray;
  }
</style>
