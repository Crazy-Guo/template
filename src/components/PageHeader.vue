<template>
  <div class="page-header">
    <div class="nav">
      <div
        :class="['item', { active: isActive(item.path) }]"
        v-for="item in navList"
        :key="item.title"
        @click="toPath(item.path)">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useI18n } from 'vue-i18n';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const { t: i18n } = useI18n();
  const navList = [
    {
      path: '/home',
      title: i18n('nav.home'),
    },
    {
      path: '/company',
      title: i18n('nav.company'),
    },
    {
      path: '/team',
      title: i18n('nav.team'),
    },
  ];
  const isActive = (path) => router.currentRoute.value.path === path;
  const toPath = (path) => {
    router.push(path);
  };
</script>

<style scoped lang="scss">
  .page-header {
    display: flex;
    height: 100px;
    line-height: 100px;
    padding: 8px 260px;
    background: #F0F0F0;
    .nav {
      display: flex;
      margin-left: 115px;
      .item {
        margin-right: 50px;
        font-size: 24px;
        font-weight: 500;
        color: #929292;
        cursor: pointer;
      }
      div.active {
        color: #000000;
      }
    }
  }

</style>
