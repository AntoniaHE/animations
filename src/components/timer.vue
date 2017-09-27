<template>
  <div class="timer"></div>
</template>

<script>

</script>

<style rel="stylesheet/less" lang="less">
.timer {
  width: 100px;
  height: 100px;
  background-color: transparent;
  box-shadow: inset 0px 0px 0px 2px #fff;
  border-radius: 50%;
  position: relative;
  margin: 38px auto;
  &:before {
    width: 40px;
    animation: roll360 8s linear infinite;
  }
  &:after {
    width: 44px;
    animation: roll360 2s linear infinite;
  }
}
.timer:after, .timer:before {
  position: absolute;
  content: "";
  background-color: #fff;
  height: 2px;
  top: 48px;
  left: 48px;
  transform-origin: 1px 1px;
}
</style>

