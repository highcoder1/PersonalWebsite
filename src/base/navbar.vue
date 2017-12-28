<template>
  <nav class="navbar">
      <div class="container">
        <div class="nav-header">
            <router-link tag="div" class="logo" to="/"><img class="home" src="../assets/img/head.jpg" alt="" title="Home"></router-link>
            <router-link tag="div" class="name" to="/blog" title="Blog">TangTao</router-link>
        </div>
        <div class="add-blog-container" title="编辑新文章">
            <i class="el-icon-edit"></i>
        </div>
        <div class="login">
            <img src="../assets/img/login.png"/>
        </div>
      </div>
  </nav>
</template>

<script type="text/javascript">
    export default {
        
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
            .add-blog-container{
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                height: 100%;
                display: flex;
                align-items: center;
                &:hover{
                    color: $color-blue;
                }
                .el-icon-edit{
                    font-size: 28px;
                }
            }
            .login{
                position: absolute;
                right: 20px;
                height: 100%;
                display: flex;
                align-items: center;
                img{
                    width: 25px;
                    height: 25px;
                }
            }
        }
        
    }
</style>

