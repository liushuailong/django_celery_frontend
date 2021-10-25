<template>
  <artical-detail :is-edit="false" />
</template>

<script>
import ArticalDetail from './components/ArticalDetail.vue';

export default {
  name: "CreateArtical",
  components: {
    ArticalDetail,
  },
}
</script>

<style scoped>

</style>