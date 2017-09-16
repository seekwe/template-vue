/**
 * Created by 影浅-Seekwe on 2017-5-10 13:25:14
 */
const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys()
     .forEach(key => {
       if (key === './index.js') return
       modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
     })

export default modules
