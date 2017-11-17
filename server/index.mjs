import Koa from 'koa'
import favicon from 'koa-favicon'
import bodyParser from 'koa-bodyparser'
import serveStatic from 'koa-static'
import path from 'path'

import logger from './logger'
import router from './routes'

const app = new Koa()

app.use(favicon())
app.use(bodyParser())
app.use(router.routes())
app.use(serveStatic('public'))

export default app
