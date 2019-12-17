<template>
  <div class="wrap" :style="verticalTop" v-show="visible">{{text}}, {{visible}}</div>
</template>

<script type="text/babel">
export default {
  name: 'SjToast',
  data() {
    return {
      verticalOffset: 20,
      duration: 3000,
      visible: false
    }
  },
  computed: {
    verticalTop() {
      return {'top': `${this.verticalOffset}px`}
    }
  },
  mounted() {
    this.startTime()
  },
  methods: {
    startTime() {
      setTimeout(() => {
        this.visible = false
      }, this.duration)
    }
  }
}
</script>

<style lang="scss">
  .wrap{
    position: fixed;
  }
</style>
