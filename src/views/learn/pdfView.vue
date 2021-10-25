<template>
    <div>
        <pdf :src='url'></pdf>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import pdf from 'comps/pdfView/index.vue'
    const url = ref('/media/echarts.pdf')
</script>

<style>

</style>