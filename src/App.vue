<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li>
        <router-link to="/page/new1">One</router-link>
      </li>
      <li>
        <router-link to="/page/new2">two</router-link>
      </li>
      <li>
        <router-link to="/page/new3">three</router-link>
      </li>
      <li>
        <router-link to="/page/new4">four</router-link>
      </li>
    </ul>
    <transition name="slider-left">
      <div class="view"><router-view class="slider-left" transiton="slider-left" /></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'slide-left'
    }
  }
}
</script>

<style>
  .view{
       width: 100%;
       height: 500px;
       float: right;
     }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  ul{
    list-style-type: none;
    padding: 0;
    margin: 20px 0;
    clear: both;
    display:block;
    width: 100%;
    text-align: center;
  }
  li{
    margin-right: 10px;
    display:inline-block;
  }
  .child-view {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 1s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
</style>
