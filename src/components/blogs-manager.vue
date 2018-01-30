<template>
  <div class="manager-container">
        <navbar></navbar>
        <el-tabs type="border-card" @tab-click="tabClick" value="all">
            <el-tab-pane label="全部文章" name="all">
                <blog-list :displayArticles="articles"></blog-list>
            </el-tab-pane>
            <el-tab-pane label="草稿箱" name="draft">
                <blog-list :displayArticles="draftArticles"></blog-list>
            </el-tab-pane>
            <el-tab-pane label="私信" name="msg">私信</el-tab-pane>
        </el-tabs>
        <foot></foot>
  </div>
</template>

<script>
    import Navbar from 'base/navbar';
    import Foot from 'base/foot';
    import axios from 'axios';
    import BlogList from 'base/blog-list';
    import {mapMutations} from 'vuex';

    export default {
        data() {
            return {
                articles: [],
                draftArticles:[]
            }
        },
        mounted() {
            this.pathToVar = {
                "articles": this.articles,
                "temparticles": this.temparticles
            }
            this.getArticles('articles');
        },
        methods: {
            tabClick(tab) {
                let name = tab.name;
                console.log(name);
                switch (name) {
                    case 'all':
                        this.getArticles('articles')
                        break;
                    case 'draft':
                        this.getArticles('temparticles');
                        break;
                    default:
                        break;
                }
            },
            getArticles(path) {
                axios.get(`/${path}`).then(res => {
                    let data = res.data;
                    if(data.status !== 0){
                        this.$message.error(data.msg);
                    }else {
                        this.pathToVar[path] = data.data.articles;
                        console.log(this.pathToVar[path]);
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
        },
        components: {
            Navbar,
            Foot,
            BlogList
        }
    }
</script>


<style lang="scss" scoped>
// 如果加了 scoped，这里边写的样式会引用到子组件的元素上，比如foot组件最外层叫container，
// 如果本组件（blogs-manager）最外层也叫container，那么此文件中给.container定义的样式会应用到子组件上（而不是本组件）
// 如果不加 scoped，那么.container会应用到本组件上。
    @import '~style/variable.scss';

    .manager-container{
        position: relative;
        min-height: 100%;
        box-sizing: border-box;
        padding: 50px 0 $footer-height;
        .el-tabs--border-card{
            border: none;
            box-shadow: none;
        }
    }
</style>
