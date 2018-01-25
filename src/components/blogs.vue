<template>
  <div class="blog-main">
    <navbar></navbar>
    <left-right-container>
      <div class="body" slot="left">
        <router-view></router-view>
        <el-pagination
          class="pagination"
          background
          layout="prev, pager, next"
          @current-change="pageChange"
          :total="filterArticles.length">
        </el-pagination>
      </div>
      <div slot="right">
        <ul>
          <li v-for="(item,index) in mulu" 
              :key="index"
              @click="muluClick(item[0])"
              class="mulu-item"
              >
              {{item[0]}} ({{item[1]}})
          </li>
        </ul>
      </div>
    </left-right-container>
  </div>
</template>

<script type="text/javascript">
  import Navbar from 'base/navbar';
  import axios from 'axios';
  import BlogList from 'base/blog-list';
  import LeftRightContainer from 'components/left-right-container';
  import {mapMutations,mapGetters} from 'vuex';

  export default {
    data() {
      return {
        articles: [],
        mulu: []
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
        this.setFilterArticles(this.filteArticles(this.filterArticles,date));
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
        'filterArticles'
      ])
    },
    components: {
      Navbar,
      BlogList,
      LeftRightContainer
    }
  }
</script>


<style lang="scss" scoped>
  @import '~style/variable.scss';

  .blog-main{
    padding-top: 50px;
    background-color: $color-blog-theme;
    .pagination{
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
    }
    .mulu-item{
      font-size: 14px;
      cursor: pointer;
      margin-bottom: 5px;
      transition: all .2s linear;
      &:hover{
          transform: translate3d(5px,0,0);
          color: $color-date;
      }
    }
  }
</style>

