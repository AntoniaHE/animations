<template>
  <div class="container">
    <div class="animation-item" v-for="animation in animationList" :key="animation">
      <component :is="animation" />
    </div>
  </div>
</template>

<script>
import AFadeIn from '@/components/a-fade-in'

export default {
  data: function () {
    return {
      animationList: [
        'aFadeIn'
      ]
    }
  },
  components: {
    AFadeIn
  }
}
</script>

<style rel="stylesheet/less" lang="less">
  .container {
    width: 1190px;
    margin: 0 auto;
  }
  .animation-item {
    flex: 1;
  }
</style>