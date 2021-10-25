<template>
    <div>
        <h1>{{ src }}</h1> 
        <div id="main"></div>
    </div>
</template>
<script setup>
    import { defineProps } from 'vue'
    defineProps({
        src: {
            type: String,
            required: true,
        }
    })
</script>

<style>

</style>