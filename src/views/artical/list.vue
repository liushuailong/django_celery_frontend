<template>
<div class="app-container">
<!--  search input-->
  <div class="search_input">
    <el-row type="flex" justify="end">
      <el-col :xs="16" :sm="12" :md="8" :lg="6" :xl="2">
        <el-input
            placeholder="请输入搜索的内容"
            v-model="search_text"
            @keyup.enter.native="searchHandler"
        >
          <template v-slot:prepend>
            <el-select v-model="search_select" placeholder="请选择">
              <el-option label="标题" value="1"></el-option>
              <el-option label="内容" value="2"></el-option>
            </el-select>
          </template>
          <template v-slot:append>
            <el-button icon="el-icon-search" :loading="search_loading" @click="searchHandler"></el-button>
          </template>
        </el-input>
      </el-col>
    </el-row>
  </div>
  <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
      :row-class-name="tableRowClassName"
  >
    <el-table-column align="center" label="ID" prop="id" sortable></el-table-column>
    <el-table-column
        align="center"
        label="title"
    >
      <template #default="scope">
        <router-link :to="'/artical/detail/' + scope.row.id">
          <span>{{ scope.row.title }}</span>
        </router-link>
      </template>
    </el-table-column>

    <el-table-column
        align="center"
        label="Created"
    >
      <template #default="scope">
        <span>{{
          $parseTime(new Date(scope.row.created), "{y}-{m}-{d} {h}:{i}")
        }}</span>
      </template>
    </el-table-column>
    <el-table-column
        align="center"
        label="Author"
        prop="user"
    />
    <el-table-column align="center" label="Actions">
      <template #default="scope">
        <router-link :to="'/artical/edit/' + scope.row.id">
          <el-button type="primary" size="small" icon="el-icon-edit">
            编辑
          </el-button>
        </router-link>
      </template>

    </el-table-column>
  </el-table>
  <br>
  <el-pagination
      background layout="prev, pager, next"
      :total="count"
      @current-change="handleCurrentChange"
      @prev-click="prevHandler"
      @next-click="nextHandler"
  >
  </el-pagination>
</div>
</template>

<script>

import { getArticleList } from 'api/articles.js';
import {searchAriticleList} from "api/articles.js";
import {getNextPrevPage} from "api/articles.js";
export default {
  name: "ArticleList",
  data() {
    return {
      list: null,
      listLoading: true,
      count: null,
      search_text: null,
      search_loading: false,
      search_select: "标题",
      next: null,
      previous: null,
    }
  },
  created() {
    this.getList(1);
  },
  methods: {
    getList(page) {
      this.loading = true;
      getArticleList(page, this.search_text, this.search_select).then(res => {
        this.list = res.data.results;
        if (res.data.next !== null) {
          this.next = res.data.next.replace(/^http:\/\/[^/]+/, "");
        } else {
          this.next = null;
        }
        if (res.data.previous !== null) {
          this.previous= res.data.previous.replace(/^http:\/\/[^/]+/, "");
        } else {
          this.previous= null;
        }
        // 进行日期的转换
        this.listLoading = false;
        this.count = res.data.count;
      })
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2  === 1) {
        return 'even-row'
      } else if (rowIndex % 2 === 0) {
        return 'odd-row'
      }
    },
    handleCurrentChange(page) {
      this.getList(page);
    },
    searchHandler() {
      this.loading = true;
      searchAriticleList(this.search_text, this.search_select).then(res => {
        console.log(res);
        this.list = res.data.results;
        if (res.data.next !== null) {
          this.next = res.data.next.replace(/^http:\/\/[^/]+/, "");
        } else {
          this.next = null;
        }
        if (res.data.previous !== null) {
          this.previous= res.data.previous.replace(/^http:\/\/[^/]+/, "");
        } else {
          this.previous= null;
        }
        console.log(this.next);
        // 进行日期的转换
        this.listLoading = false;
        this.count = res.data.count;
      })
    },
    prevHandler() {
      this.loading = true;
      getNextPrevPage(this.previous).then(res => {
        this.list = res.data.results;
        if (res.data.next !== null) {
          this.next = res.data.next.replace(/^http:\/\/[^/]+/, "");
        } else {
          this.next = null;
        }
        if (res.data.previous !== null) {
          this.previous= res.data.previous.replace(/^http:\/\/[^/]+/, "");
        } else {
          this.previous= null;
        }
        // 进行日期的转换
        this.listLoading = false;
        this.count = res.data.count;
      })
    },
    nextHandler() {
      this.loading = true;
      getNextPrevPage(this.next).then(res => {
        this.list = res.data.results;
        if (res.data.next !== null) {
          this.next = res.data.next.replace(/^http:\/\/[^/]+/, "");
        } else {
          this.next = null;
        }
        if (res.data.previous !== null) {
          this.previous= res.data.previous.replace(/^http:\/\/[^/]+/, "");
        } else {
          this.previous= null;
        }
        // 进行日期的转换
        this.listLoading = false;
        this.count = res.data.count;
      })
    },
  }
}
</script>

<style scoped>
  .search_input {
    margin-bottom: 20px;
    left: 10px;
  }
  .el-select {
    width: 80px;
  }
</style>