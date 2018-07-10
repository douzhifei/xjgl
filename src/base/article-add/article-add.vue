<template>
  <div class="article">
    <div>
      <div class="head">
        <div class="head-left" @click="quit">关闭</div>
        <div class="head-center">文章编辑</div>
        <div class="head-right" @click.passive="submit">提交</div>
      </div>
      <div class="a-item a-title">标题：
        <el-input class="a-input" type="text" v-model="data.title" placeholder="输入标题"></el-input>
      </div>
      <div class="a-item a-author">作者：
        <el-input class="a-input" type="text" v-model="data.author" placeholder="作者"></el-input>
      </div>
      <div class="a-item a-cover">封面：
        <el-upload class="a-input avatar-uploader" :action="domain" :http-request="upqiniu" :show-file-list="false" :before-upload="beforeUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="a-item a-type">类型：
        <el-input class="a-input" type="number" v-model="data.type" placeholder="1公告2攻略3数据"></el-input>
      </div>
      <div class="a-item a-banner">是否为banner：
        <input type="radio" id="i-one" value="0" v-model="data.banner">
        <label for="i-one">否</label>
        <input type="radio" id="i-two" value="1" v-model="data.banner">
        <label for="i-two">是</label>
      </div>
      <div class="a-item a-goto">跳转path：
        <el-input class="a-input" type="text" v-model="data.goto" placeholder="path"></el-input>
      </div>
      <div class="a-item a-top">排序：
        <el-input class="a-input" type="number" v-model="data.top" placeholder="默认0，数值越大越前"></el-input>
      </div>
      <vue-html5-editor class="a-content" :content="data.content" @change="updateData" :height="500" :auto-height="true" :z-index="1000" ref="editor"></vue-html5-editor>
    </div>
  </div>

</template>
<script>
import axios from 'axios'
import Scroll from 'base/scroll/scroll'
export default {
  data () {
    return {
      content: '输入内容',
      imageUrl: '',
      domain: 'http://up-z2.qiniup.com',
      qiniuaddr: 'pb2s3qp87.bkt.clouddn.com',
      data: {}
    }
  },
  props: {
    udata: {
      type: Object,
      default: () => { return {} }
    }
  },
  created () {
    // let domainConfig = {
    //     useCdnDomain: false,
    //     region: qiniu.region.z2
    // }
    // console.log(qiniu.getUploadUrl(domainConfig)) //  获取domain,要引入qiniu-js
    this.data.content = this.content
    console.log(this.udata)
    this.data = this.udata
  },
  methods: {
    // 上传文件到七牛云
    upqiniu (req) {
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
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
          this.data.cover = this.imageUrl
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
    },
    updateData (data) {
      this.data.content = data
    },
    quit () {
      this.$emit('quit')
    },
    submit () {
      this.data.banner = parseInt(this.data.banner)
      this.data.type = parseInt(this.data.type)
      this.data.top = parseInt(this.data.top)
      console.log(this.data)
      if (!(this.data.title !== '' && this.data.goto !== '' && Number.isInteger(this.data.banner) && Number.isInteger(this.data.type) && Number.isInteger(this.data.top))) {
        this.$message('不能有空值！')
        return
      }
      this.data.goto = this.data.goto.trim()
      this.$emit('submit', this.data)
    }
  },
  components: { Scroll }
}
</script>
<style lang="stylus" scoped>
.article
  width 100%
  height 100%
  z-index 999
  .head
    display flex
    width 100%
    height 45px
    align-items center
    justify-content center
    font-size 16px
    top 0
    border-bottom 2px solid #E7E6EB
    .head-center
      width 285px
      height 45px
      position absolute
      left 45px
      line-height 45px
      text-align center
    .head-left
      position absolute
      width 45px
      height 45px
      display flex
      align-items center
      justify-content center
      left 0
    .head-right
      position absolute
      width 45px
      height 45px
      right 0
      display flex
      align-items center
      justify-content center
  .a-item
    position relative
    width 94%
    padding-left 3%
    padding-bottom 10px
    height 40px
    line-height 40px
    .a-input
      position absolute
      left 20%
      width 70%
      top 0
    .a-input-submit
      position absolute
      right 0
    .avatar-uploader
      .el-upload
        border 1px dashed #d9d9d9
        border-radius 6px
        cursor pointer
        position relative
        overflow hidden
      .el-upload:hover
        border-color #409EFF
      .avatar-uploader-icon
        font-size 28px
        color #8c939d
        width 40px
        height 40px
        line-height 40px
        text-align center
      .avatar
        width 40px
        height 40px
        display block
</style>
