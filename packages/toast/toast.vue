<template>
  <div class="wrap">{{text}}</div>
</template>

<script>
export default {
  name: 'SjToast'
}
</script>

<style lang="scss">
  .wrap{
    position: fixed;
    left: 50%;
    top:50%;
    background: rgba(0,0,0,.35);
    padding: 10px;
    border-radius: 5px;
    transform: translate(-50%,-50%);
    color: $color-danger;
  }
</style>
