const qiniu = require('qiniu')
exports.uploadToken = ()=> {
    const accessKey = 'tN6NIxRtd9onNF-dxzE23_uj8WzFnqYiZiB6oot5'
    const secretKey = '82EuW5bihmPCeWxHTEtM3pfQCX0RsedY0VlXP0V0'

    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
    const options = {
    scope: 'xjgl'
    }

    const putPolicy = new qiniu.rs.PutPolicy(options);
    return putPolicy.uploadToken(mac)
}