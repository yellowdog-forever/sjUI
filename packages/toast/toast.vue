<template>
  <div>
    <div class="wrap" :style="verticalTop" v-show="visible">{{text}}, {{visible}}</div>
  </div>
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
        this.close()
      }, this.duration)
    },
    close() {
      console.log('++++++this close in vue file')
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el);
    },

    // handleAfterLeave() {
    //   this.$destroy(true);
    // }
  }
}
</script>

<style lang="scss">
  .wrap{
    position: fixed;
  }
</style>
