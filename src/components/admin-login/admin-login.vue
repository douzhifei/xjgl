<template>
    <div class="login">
        <head-box class="head-box" :data="head"></head-box>
        <el-form :model="user" status-icon :rules="rules2" ref="user" label-width="100px" class="ruleForm">
             <el-form-item label="用户" prop="user">
                <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="user.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="user.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('user')">提交</el-button>
                <el-button @click="resetForm('user')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import HeadBox from 'base/head-box/head-box'
import { login } from 'api/user'
import {mapActions} from 'vuex'
export default {
    data() {
    var checkAge = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        }else{
            callback();
        }
      };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.user.checkPass !== '') {
                    this.$refs.user.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.user.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            user: {
                pass: '',
                checkPass: '',
                name: ''
            },
            rules2: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                 user: [
                    { validator: checkAge, trigger: 'blur' }
                ]
            },
            head:{title:'登录'}
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let sendUser = {
                        name: this.user.name,
                        password: this.user.pass
                    }
                    login(sendUser).then((res)=>{
                        if(!res.success){
                            this.$message('帐号或密码错误')
                        }else{
                            console.log(res)
                            this.$message('登录成功！')
                            this.saveToken(res.token)
                            this.$router.push({
                                path:'/admin'
                            })
                        }
                    }) 
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        ...mapActions([
            'saveToken'
        ])
    },
    components:{HeadBox}
}
</script>

<style lang="stylus" scoped>
.login
    position fixed
    width 100%
    height 100%
    top 0
    bottom 0
    .ruleForm
        width 90%
        margin-left 5%
        margin-top 10px
</style>
