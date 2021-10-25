<template>
  <div class="createPost-container">
    <el-form
        ref="postForm"
        :model="postForm"
        :rules="rules"
        class="form-container"
    >
      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <el-form-item style="margin-bottom: 40px;" prop="title">
              <MDinput
                  v-model="postForm.title"
                  :maxlength="50"
                  name="name"
                  required
              >
                标题
              </MDinput>
            </el-form-item>
            <el-form-item>
              <el-row>
                <el-col :span="6">
                  <el-button
                      v-loading="loading"
                      style="margin-left: 10px;"
                      type="success"
                      @click="submitForm"
                  >Publish</el-button>
                </el-col>
                <el-col :span="6">
                  <el-upload
                      ref="upload"
                      action=""
                      :http-request="handleUpload"
                  >
                    <el-button
                        type="success"
                    >点击上传文件</el-button>
                    <template v-slot:tip>
                      <div class="el-upload__tip">只能上传markdown文件</div>
                    </template>
                  </el-upload>
                </el-col>

              </el-row>
<!--              <el-button-->
<!--                  v-loading="loading"-->
<!--                  style="margin-left: 10px;"-->
<!--                  type="success"-->
<!--                  @click="submitForm"-->
<!--              >Publish</el-button>-->

            </el-form-item>
            <el-form-item prop="content" style="margin-bottom: 30px;">
              <Tinymce
                  ref="editor"
                  v-model="postForm.content"
                  :height="400"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
import MDinput from 'comps/MDinput/index.vue';
import Tinymce from 'comps/Tinymce/index.vue';
import { Notification, Message } from 'element3';
import { createArticles } from "api/articles.js";
import { updateArticle, getArticle, uploadFile } from "api/articles.js";


const defaultForm = {
  id: undefined,
  title: "",
  content: "",
}
export default {
  name: "ArticalDetail",
  components: {
    MDinput,
    Tinymce,
  },
  props: {
    isEdit: Boolean,
    default: false,
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === "") {
        Message({
          message: rule.field + "为必传项",
          type: "error",
        });
        callback(new Error(rule.field + "为必传项"));
      } else {
        callback()
      }
    };
    return {
      postForm: Object.assign({}, defaultForm),
      loading: false,
      rules: {
        title: [{ validator: validateRequire }],
        content: [{ validator: validateRequire }],
      }
    }
  },
  created() {
    if(this.isEdit) {
      const id = this.$route.params && this.$route.params.id;
      this.fetchData(id);
    }
  },
  methods: {
    fetchData(id) {
      this.postForm.id = id;
      getArticle(id).then(res => {
        this.postForm = res.data;
      })
      // this.PostForm.title = `Ariticle Id:${this.postForm.id}`;
      // this.PostForm.content = `this is a test content.`;
      this.setPageTitle();
    },
    setPageTitle() {
      const title = "Edit Article";
      document.title = `${title} - ${this.postForm.id}`;
    },
    submitForm() {
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true;
          if (this.isEdit) {
            updateArticle(this.postForm).then(res => {
              Notification.success({
              title: '成功',
              message: '发布更新成功',
              type: 'success',
              });
              // DONE: redirect to /artical/list page
              this.$router.push('/artical/list');
            }).catch( err => {
              Notification.error({
                title: '错误',
                message: `文章更新失败: ${err}`,
              });
            })
          } else {
            createArticles(this.postForm).then(res => {
              Notification.success({
                title: '成功',
                message: '发布文章成功',
                type: 'success',
              });
              this.$router.push('/artical/list');
            }).catch( err => {
              Notification.error({
                title: '错误',
                message: '文章发布失败',
              });
            });
          }

          this.loading = false;
        } else {
          console.log('error submit!!');
          return false
        }
      });
    },
    async handleUpload(params) {
      const {file} = params
      const fileType = file.type
      console.log(fileType)
      const isMD = fileType.indexOf('markdown') !== -1
      if (!isMD) {
        Notification.error({
          title: '错误',
          message: '请上传markdonw文件',
        });
      }
      //* 2. 图片上传
      const fromData = new FormData()
      fromData.append('file', file)
      await uploadFile(fromData).then(res => {
        this.postForm.title = res.data.title
        this.postForm.content = res.data.content
      }).catch(err => {
        console.log(err)
      })
    },
    watchPostForm(value, oldValue) {
      if (this.isEdit) {
        updateArticle(this.postForm)
        .then(res => {
          console.log("ok...........");
        })
        .catch( err => {
          console.log(err);
        })
      }
    }
  },

  watch: {
    // 'postForm.title': function(value, old_value) {
    //   if (this.isEdit) {
    //     updateArticle(this.postForm)
    //     .then(res => {
    //       console.log("ok...........");
    //     })
    //     .catch( err => {
    //       console.log(err);
    //     })
    //   }
    // }
    'postForm.title': 'watchPostForm',
    'postForm.content': 'watchPostForm'
  },
}
</script>

<style lang="scss" scoped>
@import '../../../styles/mixin.scss';

.createPost-container {
  position: relative;

  .createPost-main-container {
    padding: 40px 45px 20px 50px;

    .el-form-item__content {
      background-color: #fff;
    }

    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;

      .postInfo-container-item {
        float: left;
      }
    }
  }

  .word-counter {
    width: 40px;
    position: absolute;
    right: 10px;
    top: 0;
  }
}

.article-textarea ::v-deep {
  textarea {
    padding-right: 40px;
    resize: none;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #bfcbd9;
  }
}

</style>