<template>
  <artical-detail :is-edit="true" />
</template>

<script>
import ArticalDetail from './components/ArticalDetail.vue';

export default {
  name: "EditArtical",
  components: {
    ArticalDetail,
  },
}
</script>

<style scoped>

</style>