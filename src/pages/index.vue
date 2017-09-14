<template>
  <div class="container clearfix">
     <div class="animation-item" v-for="item in animationList" :key="item"> 
       <div class="animation infinite" :class="item"></div>
     </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      animationList: [
        'a-bounce',
        'a-flash',
        'a-enlarge',
        'a-shrink',
        'a-scale',
        'a-shakex',
        'a-shakey',
        'a-swing',
        'a-wave',
        'a-fade-in',
        // 'a-fade-in-left',
        // 'a-fade-in-right',
        // 'a-fade-in-top',
        // 'a-fade-in-bottom',
        'a-fade-out',
        // 'a-fade-out-left',
        // 'a-fade-out-right',
        // 'a-fade-out-top',
        // 'a-fade-out-bottom'
        'a-light-speed-in'
      ]
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less">
  .container {
    width: 600px;
    margin: 0 auto;
  }
  .animation-item {
    width: 100px;
    height: 100px;
    margin: 10px;
    float: left;
    div {
      width: 100px;
      height: 100px;
      background-color: #eee;
      border: 1px solid #ccc;
      font-size: 18px;
      line-height: 100px;
      text-align: center;
      box-sizing: border-box;
    }
  }
</style>