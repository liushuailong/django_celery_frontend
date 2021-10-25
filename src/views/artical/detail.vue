<template>
  <div class="artical-container">
    <h1 class="artical-title"> {{ artical.title }}</h1>
<!--    下载按钮-->
    <el-button type="primary" :loading="dloading" @click="html2pdf">导出pdf</el-button>
    <div class="artical-content" v-html="artical.content">
    </div>
  </div>
</template>

<script>
import { getArticle, html2pdf } from "api/articles.js";

export default {
  name: "detail",
  created() {
    const id = this.$route.params && this.$route.params.id;
    this.fetchData(id);
  },
  data() {
    return {
      artical: {},
      dloading: false,
    }
  },
  methods: {
    fetchData(id) {
      getArticle(id).then(res => {
        this.artical = res.data;
      })
    },
    html2pdf() {
      // window.open("/api/articals/" + this.artical.id + "/html2pdf/")
      html2pdf(this.artical.id).then(res => {
        console.log(res)
        // window.open("").document.write("<iframe width='100%' height='100%' src='data:application/pdf;base64, " + res.data + "'></iframe>")
        const blob = new Blob([res.data,], {type: "application/pdf"})
        window.open(window.URL.createObjectURL(blob))
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.artical-container {
  width: 80%;
  margin: 0 auto;
  .artical-title {
    text-align: center;
  }
}
</style>