<template>
  <div class="blog-container">
      <ul>
          <li class="post-item" v-for="(article,index) in displayArticles" 
            :key="index" 
            @click="itemClick(formatPath(article))" 
            :title="article.title">
                <span class="post-date">{{article.date}}</span>
                <h3 class="post-title">{{article.title}}</h3>
          </li>
      </ul>
  </div>
</template>

<script type="text/javascript">
    import {mapGetters} from 'vuex';

    export default {
        methods: {
            formatPath(article) {
                let date = article.date,
                    title = article.title;
                let dateString = date.split('-');
                dateString.push(title);
                return `${dateString.join('/')}`;
            },
            itemClick(path){
                console.log(path);
                this.$router.push({
                    path: `/${path}`
                });
            }
        },
        computed: {
            ...mapGetters([
                'filterArticles',
                'displayArticles'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    @import '~style/variable.scss';

    .blog-container{
        padding: 20px;
        ul{
            list-style: decimal;
            .post-item{
                height: $blog-item-height;
                margin-bottom: 20px;
                cursor: pointer;
                display: flex;
                align-items: center;
                transition: all .2s linear;
                &:hover{
                    transform: translate3d(10px,0,0);
                }
                .post-date{
                    color: $color-date;
                    font-size: 15px;
                    &:before{
                        content: '';
                        display: inline-block;
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background-color: $color-date;
                        margin-right: 5px;
                    }
                }
                .post-title{
                    margin-left: 30px;
                    font-size: 20px;
                    color: $color-blue;
                }
            }
        }
    }
</style>
