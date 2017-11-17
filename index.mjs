import dotenv from 'dotenv'
dotenv.config()

import logger from './server/logger'
import server from './server'

const port = process.env.PORT

if(!port) {
	logger.error('invalidPortNumber', { port })

	process.exit()
}

server.listen(port, () => {
	logger.info('serverStarted', { port })
})
