<template>
  <div class="blog-main">
    <navbar></navbar>
  </div>
</template>

<script type="text/javascript">
  import Navbar from 'base/navbar';

  export default {
    components: {
      Navbar
    }
  }
</script>


<style lang="scss" scoped>
  @import '~style/variable.scss';

  .blog-main{
    width: 100%;
    height: 100%;
    background-color: $color-blog-theme;
  }
</style>

