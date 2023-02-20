export default {
  name: 'RouterViewCache',
  abstract: true,
  props: {},
  computed: {},
  created() {
    this.cache = {}
  },
  destroyed() {
    for (const key in this.cache) {
      const vnode = this.cache[key]
      vnode && vnode.componentInstance.$destroy()
    }
  },
  render() {
    const vnode = this.$slots.default ? this.$slots.default[0] : null
    const keepAlive = this.$route.meta.keepAlive
    if (vnode && keepAlive) {
      const key = this.$route.fullPath
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance
      } else {
        // cache new vnode
        this.cache[key] = vnode
      }
      vnode.data.keepAlive = true
    }
    return vnode
  },
  methods:{
    removeCacheByKey(key){
      const vnode = this.cache[key]
      vnode && vnode.componentInstance.$destroy()
    }
  }
}