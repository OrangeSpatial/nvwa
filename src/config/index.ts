import localConfig from './config.local'
import config from './config'

// 生产环境 使用config
// 开发环境 使用localConfig
export default process.env.NODE_ENV === 'production' ? config : localConfig