<template>
  <a-layout class="h-full">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="h-8 m-4 flex items-center justify-center text-lg text-amber-400 text-shadow-sm">
        ORANGE
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item
        @click="menuChange(menu)"
        v-for="menu in menus" :key="menu.key">
          <iconpark-icon size="16" :name="menu.icon"></iconpark-icon>
          <span v-show="!collapsed" class="ml-2.5">{{ menu.title }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="p-4"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="p-4" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content>
        <main-content />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import MainContent from './MainContent.vue';
import { useRouter } from 'vue-router';
const selectedKeys = ref<string[]>(['/home']);
const collapsed = ref<boolean>(false);

const router = useRouter();

const menus = [
  {
    key: '/home',
    icon: 'home',
    title: '首頁',
  },
  {
    key: '/designer',
    icon: 'adobe-indesign',
    title: '設計器',
  }
];

const menuChange = (menu: any) => {
  selectedKeys.value = [menu.key];
  router.push(menu.key);
};

</script>
