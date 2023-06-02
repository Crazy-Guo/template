<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item v-for="item in navList"
                     :key="item.path"
                     @click="toPath(item.path)"
                     :icon="createVNode(icons[item.icon])">
          {{ item.title }}
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>{{ selectedKeys }}</a-breadcrumb-item>
        </a-breadcrumb>
        <slot></slot>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        &copy; crazy-guo
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup>
  import * as icons from '@ant-design/icons-vue';
  import { ref, createVNode } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const collapsed = ref(false);
  const selectedKeys = ref(['/home']);
  const { t: i18n } = useI18n();
  const navList = [
    {
      path: '/home',
      title: i18n('nav.home'),
      icon: 'HomeOutlined',
    },
    {
      path: '/company',
      title: i18n('nav.company'),
      icon: 'PieChartOutlined',
    },
    {
      path: '/team',
      title: i18n('nav.team'),
      icon: 'PieChartOutlined',
    },
  ];
  // const isActive = (path) => router.currentRoute.value.path === path;
  const toPath = (path) => {
    router.push(path);
  };
</script>

<style scoped lang="scss">

</style>
