<template>
  <PageHeader/>
  <router-view></router-view>
  <PageFooter/>
</template>

<script setup>
  import PageHeader from './components/PageHeader.vue';
  import PageFooter from './components/PageFooter.vue';

</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
