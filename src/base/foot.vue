<template>
  <div class="container">
    <footer class="footer">
      © 2018 TangTao
    </footer>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
  @import '~style/variable.scss';
  
  .container{
    width: 100%;
    position: absolute;
    bottom: 0;
    .footer{
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: $color-footer;
      text-align: center;
      color: #fff;
      font-size: 14px;
    }
  }
  
</style>

