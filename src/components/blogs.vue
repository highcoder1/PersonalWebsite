<template>
  <div class="blog-main">
    <navbar></navbar>
    <left-right-container class="center">
      <div class="body" slot="left">
        <router-view :displayArticles="displayArticles"></router-view>
        <el-pagination
          class="pagination"
          background
          layout="prev, pager, next"
          @current-change="pageChange"
          :page-size="pageSize"
          :total="filterArticles.length">
        </el-pagination>
      </div>
      <div slot="right">
        <h2 class="archives">Archives</h2>
        <ul class="mulu-list">
          <li v-for="(item,index) in mulu" 
              :key="index"
              @click="muluClick(item[0])"
              class="mulu-item"
              >
              {{item[0]}} (<span class="number">{{item[1]}}</span>)
          </li>
        </ul>
      </div>
    </left-right-container>
    <foot class="foot"></foot>
  </div>
</template>

<script type="text/javascript">
  import Navbar from 'base/navbar';
  import axios from 'axios';
  import BlogList from 'base/blog-list';
  import LeftRightContainer from 'components/left-right-container';
  import {mapMutations,mapGetters} from 'vuex';
  import Foot from 'base/foot';
  import {SINGLE_PAGE_NUM} from '../config/constants';

  export default {
    data() {
      return {
        mulu: [],
        pageSize: SINGLE_PAGE_NUM
      }
    },
    mounted() {
      axios.get('/articles')
      .then( res => {
        let data = res.data;
        if(data.status !== 0){
          this.$message.error(data.msg);
        }else {
          this.setAllArticles(data.data.articles);
          this.setFilterArticles(data.data.articles);
          this.mulu = data.data.mulu;
        }
      }).catch( err => {
        console.log(err);
      })
    },
    methods: {
      muluClick(date) {
        this.setFilterArticles(this.filteArticles(this.allArticles,date));
        let path = date.split('-').join('/');
        this.$router.push({
          path: `/blogs/${path}`
        });
      },
      filteArticles(articles,date) {
        return articles.filter((item) => {
          return item.date.indexOf(date) >= 0;
        })
      },
      pageChange(num) {
        this.setDisplayArticles(num);
      },
      ...mapMutations({
        setAllArticles: 'SET_ALL_ARTICLES',
        setFilterArticles: 'SET_FILTER_ARTICLES',
        setDisplayArticles: 'SET_DISPLAY_ARTICLES'
      })
    },
    computed: {
      ...mapGetters([
        'allArticles',
        'filterArticles',
        'displayArticles'
      ])
    },
    components: {
      Navbar,
      BlogList,
      LeftRightContainer,
      Foot
    }
  }
</script>


<style lang="scss" scoped>
  @import '~style/variable.scss';

  .blog-main{
    position: relative;
    min-height: 100%;
    padding: 50px 0 $footer-height;
    box-sizing: border-box;
    background-color: $color-blog-theme;
    .center{
      .pagination{
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
      }
      .right{
        width: 100%;
        .archives{
          max-width: 240px;
          font-size: 26px;
          color: $color-date;
          border-bottom: 1px dotted #eee8d3;
          padding-bottom: 10px;
          margin-bottom: 10px;
        }
        .mulu-list{
          .mulu-item{
            font-size: 14px;
            cursor: pointer;
            margin-bottom: 5px;
            transition: all .2s linear;
            color: $color-date;
            .number{
              color: $color-blue;
            }
            &:hover{
                transform: translate3d(5px,0,0);
            }
          }
        }
      }
    }
  }
</style>

