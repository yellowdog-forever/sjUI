module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/../packages/theme-chalk/src/index.scss";`
      }
    }
  }
};
