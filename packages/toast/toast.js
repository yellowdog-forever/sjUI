// import toastComponent from './toast.vue'
import vue from "vue";
// 返回一个 扩展实例构造器
const ToastConstructor = vue.extend(require('./toast.vue').default)
let instance = null
let instances = []
// let ToastConstructor = null
const ToastPlugin = {}
let isSingle = true

ToastPlugin.install = function(vue, options) {
  isSingle = options.isSingle
  vue.prototype.$toast = Toast
  // ToastConstructor = vue.extend(toastComponent)
}

let Toast = function (options) {
  if(typeof options === 'string') {
    options = {
      text: options
    }
  }
  if (isSingle) {
    if(!instance) {
      instance = new ToastConstructor({
        el: document.createElement('div'),
        data: options
      })
      document.body.appendChild(instance.$el)
    } else {
      for(let i in options) {
        instance.$data[i] = options[i]
      }
    }
  } else {
    instance = new ToastConstructor({
      el: document.createElement('div'),
      data: options
    })
    document.body.appendChild(instance.$el)
    let verticalOffset = instances.offest || 20
    instances.forEach(item => {
      verticalOffset += item.$el.offsetHeight + 20
    })
    instance.verticalOffset = verticalOffset
    instance.visible = true
    instances.push(instance)
    return instance
  }
}

Toast.close = function () {
  
}
export default ToastPlugin