<template>
  <div class="editor-container">
        <el-input class="title" placeholder="" v-model="title" >
            <div slot="prepend">文章标题</div>
        </el-input>
        <mavon-editor ref=md v-model="article" @imgAdd="imgAdd" @imgDel="imgDel" @save="saveArticle"/>
  </div>
</template>

<script type="text/javascript">
    import axios from 'axios';

    export default {
        data() {
            return {
                title: '',
                oldTitle: '',//之前的标题，用于判断标题是否修改
                article: ''
            }
        },
        methods: {
            // focus() {
            //     this.oldTitle = this.title;
            // },
            imgAdd(pos, $file){
                console.log(pos);//      ./0
                // 第一步.将图片上传到服务器.
                let formdata = new FormData();
                formdata.append('pic', $file);
                axios({
                    url: '/imgs/upload',
                    method: 'post',
                    data: formdata,
                    headers: { 'Content-Type': 'multipart/form-data' },
                }).then(res => {
                    // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
                    this.$refs.md.$img2Url(pos, res.data.url);
                })
            },
            imgDel(fileName){
                console.log(fileName);
            },
            /**@augments
             * value markdown语法内容
             * render value经过解析后的html
             */
            saveArticle(value,render){
                if(this.title.trim() === ''){
                    this.$message.error('请输入文章标题（不能全为空格）');
                    return;
                }
                axios.post('/articles/save',{
                    title: this.title.trim(),
                    oldTitle: this.oldTitle,
                    originalContent: value,
                    htmlContent: render,
                    date: Date.now()
                }).then(res => {
                    console.log(res.data);
                    if(res.data.status === 0){
                        this.oldTitle = res.data.title;
                        this.$message({
                            message: '保存成功！',
                            type: 'success'
                        });
                    }else{
                        this.$message.error(`保存失败（${res.data.msg}）`);
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style lang="scss">
// 如果使用scoped属性，则样式仅仅应用到 style 元素的父元素及其子元素。
// 这里需要更改mavon-editor样式，不能加scoped
    .editor-container{
        width: 100%;
        height: 100%;
        .title{
            position: fixed;
            top: 0;
            z-index: 1501;
        }
        .v-note-wrapper{
            height: 100%;
            .v-note-op{
                position: fixed;
                top: 40px;
            }
            .v-note-panel{
                margin-top: 80px;
            }
            @media screen and (max-width: 1083px){
                .v-note-panel{
                    margin-top: 120px;
                }
            }
            @media screen and (max-width: 548px){
                .v-note-panel{
                    margin-top: 160px;
                }
            }
        }
    }
</style>


