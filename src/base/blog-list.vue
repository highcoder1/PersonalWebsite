<template>
  <div class="blog-container">
      <ul>
          <li class="post-item" v-for="(article,index) in articles" :key="index" @click="itemClick(formatPath(article))">
                <span class="post-date">{{article.date}}</span>
                <h3 class="post-title">{{article.title}}</h3>
          </li>
      </ul>
  </div>
</template>

<script type="text/javascript">
    export default {
        props: {
            articles: {
                type: Array,
                default: []
            }
        },
        methods: {
            formatPath(article) {
                let date = article.date,
                    title = article.title;
                let dateString = date.split('-');
                dateString.push(title);
                return `${dateString.join('/')}`;
            },
            itemClick(article){
                this.$emit('itemClick',article);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .blog-container{
        padding: 20px;
        width: 67%;
        ul{
            .post-item{
                cursor: pointer;
                margin-bottom: 10px;
                display: flex;
            }
        }
    }
    @media screen and (max-width: 768px){
        .blog-container{
            width: 100%;
        }
    }
</style>
