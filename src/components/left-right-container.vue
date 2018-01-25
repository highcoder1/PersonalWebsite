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
    .left{
        width: 100%;
    }
    .right{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }
    @media screen and (min-width: 768px){
        .left{
            width: 67%;
        }
        .right{
            width: 33%;
            position: fixed;
            top: 70px;
            right: 0;
        }
    }
</style>

