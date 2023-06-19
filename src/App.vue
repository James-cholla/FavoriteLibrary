<script>
import { Get } from "./assets/_br";
export default{
  data(){
    return {
      bg: ''
    }
  },
  created(){
    fetch('https://api.wrdan.com/randimg?format=json').then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(r=>{
      console.log(r);
    })
    
  }
}
</script>

<template>
  <a-layout class="layout" :style="`background-image:url(${bg})`">
    <a-layout-content class="content"><RouterView /></a-layout-content>
  </a-layout>
</template>

<style scoped>

.content{
  height: 100vh;
}
</style>
