import polyfill from 'node-fetch'

export default global.fetch || polyfill
