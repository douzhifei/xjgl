const qiniu = require('qiniu')

    const accessKey = 'tN6NIxRtd9onNF-dxzE23_uj8WzFnqYiZiB6oot5'
    const secretKey = '82EuW5bihmPCeWxHTEtM3pfQCX0RsedY0VlXP0V0'

    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
    const options = {
    scope: 'xjgl'
    }

    const putPolicy = new qiniu.rs.PutPolicy(options);
    // const uploadToken = putPolicy.uploadToken(mac)

module.exports = {
    port: 5050,
    mongodb: 'mongodb+srv://ben:27282129@ben-9x0e9.mongodb.net/xj?retryWrites=true',	
    //mongodb: 'mongodb://localhost:27017/ben'
    uploadToken: putPolicy.uploadToken(mac)
}