const nodeExternals = require('webpack-node-externals');

module.exports = {
    head:{
        title:"nuxt实战"
    },
    build:{
        extend(config,{isServer}){
            if(isServer){
                config.externals = [
                    nodeExternals({
                        whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-echarts/]
                    })
                ]
            }
        }
    }
}