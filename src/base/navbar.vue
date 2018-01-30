<template>
  <nav class="navbar">
      <div class="container">
        <div class="nav-header">
            <router-link tag="div" class="logo" to="/"><img class="home" src="../assets/img/head.jpg" alt="" title="Home"></router-link>
            <router-link tag="div" class="name" to="/blogs" title="Blogs">TangTao</router-link>
        </div>
        <div class="right-container">
            <el-dropdown @command="dropMenuClick">
                <div class="log-container" @click="logIconClick">
                    <i class="iconfont icon-wode icon-log " :class="{'icon-color': editable}"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="toEdit">写新文章</el-dropdown-item>
                    <el-dropdown-item command="toManager">文章管理</el-dropdown-item>
                    <el-dropdown-item v-show="editable" command="logout">登出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <el-dialog
            title="Login"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <span class="tooltip" v-show="isMessageError">账号或密码错误!</span>
            <ul>
                <li class="account"><i class="iconfont icon-wode"></i><input type="text" placeholder="账号" v-model="name" @input="onMsgChange" @keydown="keyDown"/></li>
                <li class="pwd"><i class="iconfont icon-password"></i><input type="password" placeholder="密码" v-model="password" @input="onMsgChange" @keydown="keyDown"/></li>
            </ul>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="onLogin">登录</el-button>
            </span>
        </el-dialog>
      </div>
  </nav>
</template>

<script type="text/javascript">
    import axios from 'axios';
    import qs from 'qs';
    import * as constants from '../config/constants';

    export default {
        data(){
            return {
                centerDialogVisible: false,
                editable: false,
                name: '',
                password: '',
                isMessageError: false
            }
        },
        mounted() {
            this.checkLogin();
        },
        methods: {
            logIconClick() {
                if(this.editable) return ;
                this.centerDialogVisible = true;
            },
            dropMenuClick(command) {
                if(command === 'logout'){
                    this.onLogout();
                }else if(command === 'toManager'){
                    if(!this.editable) this.centerDialogVisible = true;
                    else this.$router.push('/manager');
                }else if(command === 'toEdit'){
                    if(!this.editable) this.centerDialogVisible = true;
                    else this.$router.push('/edit');
                }
            },
            onLogin(){
                // console.log(`name: "${this.name}" password:"${this.password}"`);
                let name = this.name.trim();
                let password = this.password.trim();
                if(name === '' || password === ''){
                    this.isMessageError = true;
                    return;
                }
                // axios.get('/admins',{
                //     params: {
                //         name: name,
                //         password: password
                //     }
                // }).then(res => {
                //     console.log(res.data);
                // }).catch(err => {
                //     console.log(err);
                // })
                axios.post('/admins/login',{
                    name: name,
                    password: password
                }).then(res => {
                    let data = res.data;
                    if (data.status === constants.STATUS_OK) {
                        this.centerDialogVisible = false;
                        this.editable = true;
                        this.name = '';
                        this.password = '';
                    }else if(data.status === constants.STATUS_ERR){
                        this.isMessageError = true;
                    }else if(data.status === constants.STATUS_SERVICE_ERR){
                        this.$message.error('服务器端错误');
                    }
                }).catch(err => {
                    console.log(err);
                })

            },
            onLogout() {
                axios.post('/admins/logout').then(res => {
                    if (res.data.status === constants.STATUS_OK) {
                        this.editable = false;
                    }else{
                        this.$message.error("服务器未响应");
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            checkLogin(){
                axios.post('/admins/checkLogin').then(response => {
                    let res = response.data;
                    if(res.status === constants.STATUS_OK){
                        this.editable = true;
                    }
                })
            },
            onMsgChange(){
                if(this.name.trim() != '' && this.password.trim() != ''){
                    this.isMessageError = false;
                }
            },
            keyDown(e) {
                if(e.keyCode === 13){
                    this.onLogin();
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~style/variable.scss';

    .navbar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 20;
        display: flex;
        justify-content: center;
        height: $header-height;
        background-color: #fff;
        box-shadow: 0 0 5px #ccc;
        padding: 0 15px;
        @media screen and (max-width: 768px){
            .container{
                width: 100%;
            }
        }
        @media screen and (min-width: 768px){
            .container{
                width: 750px;
            }
        }
        @media screen and (min-width: 992px){
            .container{
                width: 970px;
            }
        }
        @media screen and (min-width: 1200px){
            .container{
                width: 1170px;
            }
        }
        .container{
            position: relative;
            display: flex;
            height: 100%;
            line-height: $header-height;
            font-size: 18px;
            .nav-header{
                display: flex;
                align-items: center;
                .logo{
                    cursor: pointer;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    img{
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        box-shadow: 1px 1px 8px 2px #ccc;
                    }
                }
                .name{
                    margin-left: 10px;
                    color: $color-blue;
                    font-size: 20px;
                    cursor: pointer;
                }
            }
            .right-container{
                position: absolute;
                right: 0;
                height: 100%;
                display: flex;
                align-items: center;
                .add-blog-container{
                    height: 100%;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    margin-right: 20px;
                    &:hover{
                        color: $color-blue;
                    }
                    .el-icon-edit{
                        font-size: 28px;
                    }
                }
                .log-container{
                    cursor: pointer;
                    .icon-log{
                        font-size: 24px;
                        &.icon-color{
                            color: $color-blue;
                        }
                    }
                }
            }
            .el-dialog__wrapper{
                .el-dialog--center{
                    div{
                        &.el-dialog__body{
                            padding-top: 0;
                            .tooltip{
                                color:red;

                            }
                            li{
                                border: 1px solid $color-blue;
                                border-radius: 5px;
                                height: 30px;
                                padding: 5px;
                                display: flex;
                                align-items: center;
                                input{
                                    width: 100%;
                                    outline: none;
                                    height: 100%;
                                    line-height: 30px;
                                    margin-left: 5px;
                                }
                                &.account{
                                    margin-bottom: 10px;
                                }
                            }
                        }
                        &.el-dialog__footer{
                            padding: 10px 27px 15px;
                            .dialog-footer{
                                display: block;
                                width: 100%;
                                button{
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

