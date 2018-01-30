<template>
  <div class="left-right-container">
      <section class="left">
          <slot name="left" ></slot>
      </section>
      <section class="right">
          <slot name="right"></slot>
      </section>
      
  </div>
</template>

<style lang="scss" scoped>
    @media screen and (max-width: 768px){
        .left{
            width: 100%;
        }
        .right{
            width: 100%;
            margin-bottom: 30px;
            display: flex;
            justify-content: center;
        }
    }
    @media screen and (min-width: 768px){
        .left{
            width: 67%;
        }
        .right{
            width: 33%;
            padding-left: 100px;
            position: fixed;
            top: 100px;
            right: 0;
        }
    }
</style>

