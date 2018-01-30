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
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {
                article: ''
            }
        },
        mounted() {
            axios.get(`/articles?id=${this.isProcessingId}`)
                .then( res => {
                    let data = res.data;
                    if(data.status !== 0){
                        this.$message.error(data.msg);
                    }else {
                        this.article = this.unescapeHTML(data.doc);
                    }
                }).catch( err => {
                    console.log(err);
                })
        },
        methods: {
            unescapeHTML(doc) {
                let temp = document.createElement('div');
                temp.innerHTML = doc;
                return temp.textContent ? temp.textContent : temp.innerText;
            }
        },
        computed: {
            ...mapGetters([
                'isProcessingId'
            ])
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
        }
    }
</style>

