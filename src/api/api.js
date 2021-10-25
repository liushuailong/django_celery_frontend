import axiosInstance from "utils/request";

const axios = axiosInstance

export const getBooks = () => axios.get(`/api/books/`)

export const postBook = (bookName, bookAuthor) => axios.post(`/api/books/`,{'name': bookName, 'author': bookAuthor})
