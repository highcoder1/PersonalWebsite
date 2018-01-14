<template>
  <div>
      <mavon-editor ref=md v-model="article" @imgAdd="imgAdd" @imgDel="imgDel"/>
  </div>
</template>

<script type="text/javascript">
    import axios from 'axios';

    export default {
        data() {
            return {
                article: ''
            }
        },
        methods: {
            imgAdd(pos, $file){
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
                    // $vm.$img2Url 详情见本页末尾
                    console.log(res.data);
                    this.$refs.md.$img2Url(pos, res.data.url);
                })
            },
            imgDel(){
                console.log('imgdelete');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .v-note-op{
        position: fixed;
        top: 0;
    }
</style>


