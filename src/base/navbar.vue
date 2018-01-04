<template>
  <nav class="navbar">
      <div class="container">
        <div class="nav-header">
            <router-link tag="div" class="logo" to="/"><img class="home" src="../assets/img/head.jpg" alt="" title="Home"></router-link>
            <router-link tag="div" class="name" to="/blog" title="Blog">TangTao</router-link>
        </div>
        <div class="right-container">
            <router-link v-show="login" tag="div" to="/edit" class="add-blog-container" title="编辑新文章">
                <i class="el-icon-edit"></i>
            </router-link>
            <el-button @click="centerDialogVisible = true">登录</el-button>
        </div>
        <el-dialog
            title="Login"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <ul>
                <li class="account"><i class="iconfont icon-wode"></i><input type="text" placeholder="账号"/></li>
                <li class="pwd"><i class="iconfont icon-password"></i><input type="text" placeholder="密码"/></li>
            </ul>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="centerDialogVisible = false">登录</el-button>
            </span>
        </el-dialog>
      </div>
  </nav>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
                centerDialogVisible: false,
                login: false
            }
        }
    }
</script>


<style lang="scss" scoped>
    @import '~style/variable.scss';

    .navbar{
        display: flex;
        justify-content: center;
        height: $header-height;
        border-bottom: 1px solid #e7e7e7;
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
            }
            .el-dialog__wrapper{
                .el-dialog--center{
                    div{
                        &.el-dialog__body{
                            padding-top: 0;
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

