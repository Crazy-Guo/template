<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script setup>
  import { ConfigProvider } from 'ant-design-vue';
  import Layout from './components/Layout.vue';
  // import 'ant-design-vue/dist/antd.less';
  import 'ant-design-vue/dist/antd.variable.min.css';

  ConfigProvider.config({
    theme: {
      primaryColor: '#1DA57A',
    },
  });

</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
