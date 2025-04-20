import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const BookList = [
  {
    id: 1,
    title: 'test1-title',
    body: 'test1-body',
  },
  {
    id: 2,
    title: 'test2-title',
    body: 'test2-body',
  },
  {
    id: 3,
    title: 'test3-title',
    body: 'test3-body',
  },
  {
    id: 4,
    title: 'test3-title-aaaaaaaaaaaaaaa',
    body: 'test3-body-bbbbbbbbbbbbbbbbb',
  },
]

// モックサーバー初期化
const mock = new MockAdapter(axios, { delayResponse: 500 }) // 500ms 遅延

// GETリクエストをモック
mock.onGet('https://bookers/api/books').reply(200, BookList)
