<template>
  <div class="blog-main">
    <navbar></navbar>
    <section class="body">
      <blog-list :articles="articles" @itemClick="itemClick"></blog-list>
    </section>
  </div>
</template>

<script type="text/javascript">
  import Navbar from 'base/navbar';
  import axios from 'axios';
  import BlogList from 'base/blog-list';

  export default {
    data() {
      return {
        articles: []
      }
    },
    mounted() {
      axios.get('/articles')
      .then( res => {
        let data = res.data;
        if(data.status !== 0){
          this.$message.error(data.msg);
        }else {
          console.log('blog:');
          console.log(data.articles);
          this.articles = data.articles;
        }
      }).catch( err => {
        console.log(err);
      })
    },
    methods: {
      itemClick(path) {
        console.log(path);
        this.$router.push({
          path: `/${path}`
        });
      }
    },
    components: {
      Navbar,
      BlogList
    }
  }
</script>


<style lang="scss" scoped>
  @import '~style/variable.scss';

  .blog-main{
    padding-top: 50px;
    background-color: $color-blog-theme;
  }
</style>

