<template>
    <a-row class="mt-10" type="flex" justify="center">
        <a-col class="content" :span="18">col-12</a-col>
    </a-row>
</template>
<script>
export default {
    layout: "custom"
}
</script>
<style scoped>
.content{
    height: 80vh;
    border-radius: 12px;
    backdrop-filter: blur(10px);
}
</style>