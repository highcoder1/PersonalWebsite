<template>
  <div class="blog-container">
      <ul class="post-list">
          <li class="post-item" v-for="(article,index) in displayArticles" 
            :key="index" 
            @click="itemClick(article)" 
            :title="article.title">
                <span class="post-date">{{article.date}}</span>
                <h3 class="post-title">{{article.title}}</h3>
          </li>
      </ul>
  </div>
</template>

<script type="text/javascript">
    import {mapMutations} from 'vuex';

    export default {
        props: {
            displayArticles: {
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
                this.setProcessingId(article.id);
                let path = this.formatPath(article);
                this.$router.push({
                    path: `/${path}`
                });
            },
            ...mapMutations({
                setProcessingId: 'SET_PROCESSING_ID'
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import '~style/variable.scss';

    .blog-container{
        margin-left: 80px;
        padding: 20px;
        .post-list{
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
