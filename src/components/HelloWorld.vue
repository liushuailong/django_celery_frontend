<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(book, index) in books" :key="index" style="display: block">
        {{ index }}-{{book.name}}-{{book.author}}
      </li>
    </ul>

    <form action="">
      <label for="input_name"></label>
      <input type="text" id="input_name" placeholder="book name" v-model="inputBook.name">
      <br>
      <label for="input_name"></label>
      <input type="text" id="input_author" placeholder="book author" v-model="inputBook.author">
    </form>
    <button type="submit" @click="bookSubmit()">submit</button>
  </div>
</template>

<script>
import { getBooks, postBook } from "../api/api";

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      books: [{name: 'test', author: 't1'}, {name: 'test2', author: 't'}],
      inputBook: {
        name: "",
        author: ""
      }
    }
  },
  methods: {
    loadBooks () {
      getBooks().then(res => {
        console.log(res)
        this.books = res.data.results
      })
    },
    bookSubmit() {
      postBook(this.inputBook.name, this.inputBook.author).then(res => {
        console.log(res)
        this.loadBooks()
      })
    }
  },
  created() {
    this.loadBooks()
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
