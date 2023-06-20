<template>
  <a-layout>

    <a-layout-content id="body" :style="`background-image:url(${bg})`">
      <a-layout-header id="head">Header</a-layout-header>
      <slot />

      <a-layout-footer id="foot">底部</a-layout-footer>
    </a-layout-content>

  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      bg: ''
    }
  },
  created() {
    const that = this
    fetch('https://api.btstu.cn/sjbz/api.php?lx=dongman&format=json').then(Response => {
      if (Response.ok) {
        return Response.json()
      }
    }).then(res => {
      
    })
  }
}
</script>