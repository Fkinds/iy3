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

const PblList = [
  {
    id: 1,
    pbl_id: '3387',
    pbl_name: 'バックログ新規作成',
    pbl_sp: null,
    pbl_priority: 1,
    project_id: 1,
    pbl_sprint: 1,
  },
  {
    id: 2,
    pbl_id: '3368',
    pbl_name: 'バックログ一覧の作成',
    pbl_sp: 2,
    pbl_priority: 2,
    project_id: 1,
    pbl_sprint: 2,
  },
  {
    id: 3,
    pbl_id: '3369',
    pbl_name: '一覧機能の作成',
    pbl_sp: 3,
    pbl_priority: 4,
    project_id: 1,
    pbl_sprint: 3,
  },
]

// モックサーバー初期化
const mock = new MockAdapter(axios, { delayResponse: 500 }) // 500ms 遅延

// GETリクエストをモック
mock.onGet('https://bookers/api/books').reply(200, BookList)

mock.onGet('https://localhost:8080/api/pbls/view_backlog_all/${id}').reply(200, PblList)
