import winston from 'winston'

import config from './config'

winston.level = config('LOG_LEVEL') || 'info'

if(process.stdout.isTTY) {
  // Pretty colours
  winston.cli()
}

export default winston
