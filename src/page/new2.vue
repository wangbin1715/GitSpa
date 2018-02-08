<template>
  <div class="new2"><h1>{{msg}}</h1><span>{{ganauthor}}</span></div>
</template>

<script>
export default {
  name: 'new2',
  data () {
    return {
      msg: 'this is my two page !'
    }
  },
  computed: {
    ganauthor () {
      return this.$store.getters.ganauthor
    }
  }
}
</script>

<style>
  .new2{
    background-color: cornflowerblue;
  }
  .new2 >span{
    color: red;
    font-size: 30px;
    display: block;
  }
</style>
