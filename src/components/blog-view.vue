<template>
  <div class="container">
      <navbar></navbar>
      <section class="blog-container">
          <article class="blog-content" v-html="article"></article>
          <aside class="blog-catalog"></aside>
      </section>
  </div>
</template>

<script type="text/javascript">
    import Navbar from 'base/navbar';
    import axios from 'axios';

    export default {
        data() {
            return {
                article: ''
            }
        },
        mounted() {
            let title = this.$route.params.title;
            axios.get(`/articles?title=${title}`)
                .then( res => {
                    let data = res.data;
                    if(data.status !== 0){
                        this.$message.error(data.msg);
                    }else {
                        console.log(data.doc);
                        this.article = data.doc;
                    }
                }).catch( err => {
                    console.log(err);
                })
        },
        components: {
            Navbar
        }    
    }
</script>

<style lang="scss" scoped>
    @import '~style/variable.scss';

    .container{
        padding-top: $header-height;
        .blog-container{
            padding: 20px;
            .blog-content{
                width: 67%;
            }
            @media screen and (max-width: 768px){
                .blog-content{
                    width: 100%;
                }
            }
        }
    }
</style>

