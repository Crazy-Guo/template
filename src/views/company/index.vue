<template>
  <div class="company">
    {{ $t('nav.company') }}test123
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .company {
    width: 70vw;
    margin: 10vh auto;
    .title {
      font-size: 48px;
      font-weight: bold;
      padding-left: 5vw;
    }
    .underline {
      width: 12vw;
      height: 8px;
      background: #000000;
      border-radius: 4px;
      margin: 10px 0 0 5vw;
    }
    img {
      width: 70vw;
      margin: 80px 0;
    }
    .desc {
      width: 65vw;
      font-size: 30px;
      font-weight: 300;
      color: #6D6D6D;
      text-indent: 3em;
      margin: 0 auto 50px;
    }
  }
</style>
