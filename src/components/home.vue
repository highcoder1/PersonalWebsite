<template>
    <div class="container" >
        <div class="center-container">
            <div class="img-container">
                <img class="img-head" src='../assets/img/head.jpg' alt="" />
            </div>
            <ul class="direct-panel">
                <li><router-link tag="a" to="/blog">首页</router-link></li>
                <li><a href="http://blog.csdn.net/highboys" target="_blank" rel="noopener noreferrer">CSDN博客</a></li>
                <li><a href="https://github.com/highcoder1" target="_blank" rel="noopener noreferrer">Github</a></li>
            </ul>
        </div>
    </div> 
</template>


<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @import '~style/variable.scss';

    .container{
        background-image: url(../assets/img/home_bkg_img4.jpg);
        background-size: cover;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .center-container{
        margin-top: -80px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .img-container{
            width: $img-head-size;
            height: $img-head-size;
            margin-bottom: 30px;
            .img-head{
            width: $img-head-size;
            height: $img-head-size;
            border-radius: 50%;
            }
        }
        .direct-panel{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            li{
            margin-bottom: 20px;
            height: 20px;
            line-height: 20px;
            a{
            color: $color-text;
            font-size: 16px;
            &:hover{
                color: $color-yellow;
                font-size: 18px;
            }
            }
            }
        }
        }
    }
</style>

