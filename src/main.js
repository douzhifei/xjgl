// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'lib-flexible/flexible.js'
import 'common/stylus/index.styl'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { DataTables } from 'vue-data-tables'
import VueHtml5Editor from 'vue-html5-editor'
import 'common/css/font-awesome.min.css'
import axios from 'axios'
Vue.use(ElementUI)
Vue.use(DataTables)
Vue.use(VueLazyload, {
  loading: require('common/image/default.jpg')
})
let template7 = '<div><div><el-upload class=\'a-input avatar-uploader\' :action= \'domain\' :http-request = \'upqiniu\' :show-file-list=\'false\' :before-upload=\'beforeUpload\'><el-button size=\'small\' type=\'primary\'>点击上传</el-button></el-upload></div></div>'
Vue.use(VueHtml5Editor, {
  showModuleName: false,
  image: {
    sizeLimit: 512 * 1024,
    compress: true,
    width: 500,
    height: 500,
    quality: 80
  },
  modules: [
    {
      name: 'qiniu',
      icon: 'fa fa-file-image-o',
      show: true,
      dashboard: {
        template: template7,
        data () {
          return {
            domain: 'http://up-z2.qiniup.com',
            qiniuaddr: 'pb2s3qp87.bkt.clouddn.com',
            imageUrl: ''
          }
        },
        methods: {
        // 上传文件到七牛云
          upqiniu (req) {
            const config = {
              headers: {'Content-Type': 'multipart/form-data'}
            }
            let filetype = ''
            if (req.file.type === 'image/png') {
              filetype = 'png'
            } else if (req.file.type === 'image/jpeg') {
              filetype = 'jpg'
            } else {
              filetype = 'gif'
            }
            // 重命名要上传的文件
            const keyname = 'xjgl' + (new Date()).getTime() + Math.floor(Math.random() * 100) + '.' + filetype
            // 从后端获取上传凭证token
            axios.get('/getToken').then(res => {
              const formdata = new FormData()
              formdata.append('file', req.file)
              formdata.append('token', res.data)
              formdata.append('key', keyname)
              // 获取到凭证之后再将文件上传到七牛云空间
              axios.post(this.domain, formdata, config).then(res => {
                this.imageUrl = 'http://' + this.qiniuaddr + '/' + res.data.key
                let imgHtml = `<img src=${this.imageUrl} style="max-width:100%">`
                this.$parent.execCommand('insertHTML', imgHtml)
              })
            })
          },
          // 验证文件合法性
          beforeUpload (file) {
            const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif'
            const isLt5M = file.size / 1024 / 1024 < 5
            if (!isJPG) {
              this.$message.error('上传图片只能是 JPG 格式!')
            }
            if (!isLt5M) {
              this.$message.error('上传图片大小不能超过 5MB!')
            }
            return isJPG && isLt5M
          }
        }
      }
    }
  ]
})
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
