<template>
  <div class="main-content">
    <div class="main-content-title">analysia_app_card</div>
    <el-row :gutter="20">
      <el-col v-for="app in appinfo" :key="app" :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <el-card :body-style="{padding: '0px'}" class="box-card">
          <template v-slot:header>
            <div class="clearfix">
              <span>{{app.title}}</span>
              <el-button style="float: right; padding: 3px 0" type="text"
                >开始分析</el-button
              >
            </div>
          </template>
          <div class="app-info clearfix">
            <p class="indentation">{{app.info}}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "analysis_app_card",
  data() {
    return {
      appinfo: [
          {
            title: "normalize",
            info: "归一化的目的是使得没有可比性的数据变得具有可比性，同时又保持相比较的两个数据之间的相对关系。归一化的目的是使得没有可比性的数据变得具有可比性，同时又保持相比较的两个数据之间的相对关系。",
            url: "",
            imgsrc: ""
          },
          {
            title: "PCA",
            info: "PCA(Principal Component Analysis)，即主成分分析方法，是一种使用最广泛的数据降维算法。PCA的主要思想是将n维特征映射到k维上，这k维是全新的正交特征也被称为主成分，是在原有n维特征的基础上重新构造出来的k维特征。",
            url: "",
            imgsrc: ""
          },
          {
            title: "PLSA",
            info: "归一化的目的是使得没有可比性的数据变得具有可比性，同时又保持相比较的两个数据之间的相对关系",
            url: "",
            imgsrc: ""
          },
          {
            title: "Ttest",
            info: "t-test 也称为 Student's T Test，用来比较两样本平均值之间是否具有显著性差异。",
            url: "",
            imgsrc: ""
          },
          {
            title: "Heatmap",
            info: "通过热图可以简单地聚合大量数据，并使用一种渐进的色带来优雅地表现，最终效果一般优于离散点的直接显示，可以很直观地展现空间数据的疏密程度或频率高低。但也由于很直观，热图在数据表现的准确性并不能保证。",
            url: "",
            imgsrc: ""
          },
          {
            title: "Venn",
            info: "Venn图，又称韦恩图或文氏图，是一种用于直观表示元素集合重叠的一种图形。Venn图在生物信息学领域常用于展示样品不同分组间共有和特有的基因、OTU和分类单元等。",
            url: "",
            imgsrc: ""
          },
          {
            title: "upSet",
            info: "",
            url: "",
            imgsrc: ""
          },
          {
            title: "Go/KEGG气泡图",
            info: "",
            url: "",
            imgsrc: ""
          },
          {
            title: "火山图",
            info: "",
            url: "",
            imgsrc: ""
          },
          {
            title: "GO富集条形图",
            info: "",
            url: "",
            imgsrc: ""
          },
          {
            title: "Corrplot图",
            info: "corrplot 图可以用圈的大小和颜色变化来反映二维矩阵或表格中的数据信息，它可以直观地将数据值的大小以定义的圈的大小及颜色深浅表示出来。相关性 corrplot 分析通过计算物种间或环境因子与物种的相关性（Spearman 系数等），将获得的数值矩阵直观的展示到 corrplot 中。",
            url: "",
            imgsrc: ""
          }
      ]
    }
  }
}
</script>

<style scoped>
  .main-content {
    margin: 3em  3em;
  }

  .main-content-title {
    margin: 0 atuo;
  }
  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 5px;
    margin: 0.5em 0;
  }


  .app-info {
    font-size: 1em;
    padding: 0 auto;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: '';
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    height: 15em;
  }

  .indentation {
    text-indent: 2em;
    padding: 0 1em;
    line-height: 1.5em;
  }
</style>