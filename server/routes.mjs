import Router from 'koa-router'

const mainRouter = new Router({
	prefix: '',
})

mainRouter.get('/health', async ctx => {
	ctx.body = "Nothing to see here"
})

export default mainRouter
